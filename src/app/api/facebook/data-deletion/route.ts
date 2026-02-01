import { NextRequest, NextResponse } from 'next/server';
import { parseSignedRequest } from '@/lib/facebook';
import { createAuditLog } from '@/lib/audit';
import { prisma } from '@/lib/prisma';

const BASE_URL = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_APP_URL || 'https://www.centxo.com';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const signedRequest = formData.get('signed_request') as string;

        if (!signedRequest) {
            return NextResponse.json({ error: 'Missing signed_request' }, { status: 400 });
        }

        const data = parseSignedRequest(signedRequest, process.env.FACEBOOK_APP_SECRET || '');

        if (!data) {
            return NextResponse.json({ error: 'Invalid signed_request' }, { status: 400 });
        }

        const fbUserId = String(data.user_id);
        const confirmationCode = `DEL-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        console.log(`[Data Deletion] FB User ID: ${fbUserId}, Code: ${confirmationCode}`);

        // Initiate deletion: remove all Facebook-linked data for this user
        try {
            await prisma.$transaction(async (tx) => {
                // 1. Find MetaAccount(s) by metaUserId (FB app-scoped ID)
                const metaAccounts = await tx.metaAccount.findMany({
                    where: { metaUserId: fbUserId },
                    include: { campaigns: { include: { adSets: { include: { ads: true } } } } },
                });

                for (const meta of metaAccounts) {
                    for (const campaign of meta.campaigns) {
                        for (const adSet of campaign.adSets) {
                            for (const ad of adSet.ads) {
                                await tx.adInsight.deleteMany({ where: { adId: ad.id } });
                                await tx.auditLog.deleteMany({ where: { adId: ad.id } });
                            }
                            await tx.adSetInsight.deleteMany({ where: { adSetId: adSet.id } });
                            await tx.ad.deleteMany({ where: { adSetId: adSet.id } });
                        }
                        await tx.campaignInsight.deleteMany({ where: { campaignId: campaign.id } });
                        await tx.auditLog.deleteMany({ where: { campaignId: campaign.id } });
                        await tx.adSet.deleteMany({ where: { campaignId: campaign.id } });
                    }
                    await tx.campaign.deleteMany({ where: { metaAccountId: meta.id } });
                    await tx.metaAccount.delete({ where: { id: meta.id } });
                }

                // 2. Delete Account (OAuth link) where provider=facebook and providerAccountId=fbUserId
                await tx.account.deleteMany({
                    where: { provider: 'facebook', providerAccountId: fbUserId },
                });
            });
        } catch (dbError) {
            // Meta: "You can disregard user IDs that do not currently appear in your database"
            // Still return success - don't fail the callback
            console.warn(`[Data Deletion] No data found or error for FB User ${fbUserId}:`, dbError);
        }

        await createAuditLog({
            action: 'DATA_DELETION_REQUEST',
            entityType: 'DataDeletionRequest',
            details: { fbUserId, confirmationCode },
            userId: 'SYSTEM',
        });

        const statusUrl = `${BASE_URL.replace(/\/$/, '')}/api/facebook/data-deletion/status?id=${confirmationCode}`;

        return NextResponse.json({
            url: statusUrl,
            confirmation_code: confirmationCode,
        });
    } catch (error) {
        console.error('[Data Deletion] Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
