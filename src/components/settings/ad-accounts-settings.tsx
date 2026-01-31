'use client';

import { ConfigForm } from '@/components/config-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConfig } from '@/contexts/AdAccountContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, Users, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

export function AdAccountsSettings() {
    const { t } = useLanguage();
    const { adAccounts, pages, businesses, loading, refreshData } = useConfig();
    const router = useRouter();
    const { data: session } = useSession();
    const hasRefreshedOnMount = useRef(false);

    // Check if we have any ad accounts, pages, or businesses from team members or MetaAccount (Facebook login)
    const hasData = adAccounts.length > 0 || pages.length > 0 || businesses.length > 0;

    // When tab mounts with session but no data, force refresh to pull from MetaAccount (Facebook login)
    useEffect(() => {
        if (session?.user && !hasData && !hasRefreshedOnMount.current) {
            hasRefreshedOnMount.current = true;
            refreshData(true, { bypassCooldown: true });
        }
    }, [session?.user, hasData, refreshData]);

    const handleGoToTeam = () => {
        router.push('/settings/connections?tab=connections');
    };

    const handleRefresh = () => {
        refreshData(true, { bypassCooldown: true });
    };

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-center p-12">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            </div>
        );
    }

    if (!hasData) {
        return (
            <div className="space-y-6">
                <Card className="p-12">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">{t('settings.adAccounts.noConnected', 'No Facebook Accounts Connected')}</h3>
                            <p className="text-muted-foreground max-w-md">
                                {t('settings.adAccounts.noConnectedDesc', 'Add Facebook accounts to your team to manage ad accounts and pages. If you logged in with Facebook, click Refresh to pull your ad accounts and pages.')}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center mt-4">
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={handleRefresh}
                                disabled={loading}
                            >
                                <RefreshCw className="h-5 w-5 mr-2" />
                                {t('settings.adAccounts.refresh', 'Refresh')}
                            </Button>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={handleGoToTeam}
                            >
                                <Users className="h-5 w-5 mr-2" />
                                {t('settings.adAccounts.goToConnections', 'Go to Connections')}
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="rounded-lg border border-border bg-muted/30 p-6">
                <ConfigForm />
            </div>
        </div>
    );
}
