import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import AuthProvider from '@/app/providers/auth-provider';
import { AdAccountProvider } from '@/contexts/AdAccountContext';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeColorProvider } from '@/contexts/ThemeColorContext';
import './globals.css';

// System fonts - no network fetch during build (fixes ETIMEDOUT in restricted environments)
const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXTAUTH_URL ||
    "https://centxo.online";

const PRIVACY_URL = `${BASE_URL}/privacy`;
const TERMS_URL = `${BASE_URL}/terms`;

export const metadata: Metadata = {
    title: 'Centxo Digital Solution - Facebook/Meta Ads Management',
    description: 'Centxo Digital Solution is a Facebook/Meta ads management application. Manage multiple ad accounts, create and optimize campaigns, export to Google Sheets. Privacy Policy: ' + PRIVACY_URL,
    verification: process.env.GOOGLE_SITE_VERIFICATION
        ? { google: process.env.GOOGLE_SITE_VERIFICATION }
        : undefined,
    alternates: {
        canonical: BASE_URL.replace(/\/$/, ""),
    },
    // Google OAuth: Link elements in head for crawlers
    other: {
        "privacy-policy": PRIVACY_URL,
        "terms-of-service": TERMS_URL,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-background text-foreground antialiased font-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                    storageKey="adpilot-theme"
                >
                    <LanguageProvider>
                        <ThemeColorProvider>
                            <AuthProvider>
                                <AdAccountProvider>
                                    {children}
                                </AdAccountProvider>
                            </AuthProvider>
                            <Toaster />
                            <SonnerToaster />
                        </ThemeColorProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
