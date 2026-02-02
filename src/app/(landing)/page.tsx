import { LandingPageClient } from "@/components/landing-page-client";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://centxo.online";

/** JSON-LD for Google OAuth verification + SEO (phone search) */
function LandingJsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Centxo Digital Solution",
    description: "Facebook and Meta ads management platform. We use Google Sign-In for authentication. We collect email and name solely for account management. We do not share your data with third parties.",
    url: BASE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    privacyPolicy: `${BASE_URL}/privacy`,
    termsOfService: `${BASE_URL}/terms`,
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Centxo Digital Solution",
    legalName: "Narongsak Srikracha",
    url: BASE_URL,
    telephone: "+66803787247",
    email: "nprxth@gmail.com",
    description: "Facebook and Meta ads management platform. Manage ad accounts, campaigns, and export to Google Sheets.",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}

export async function generateMetadata() {
  const base = process.env.NEXT_PUBLIC_APP_URL || "https://centxo.online";
  return {
    title: "Centxo Digital Solution - Facebook/Meta Ads Management Platform | Privacy Policy",
    description:
      "Centxo Digital Solution is a Facebook/Meta ads management platform. Manage multiple ad accounts, optimize campaigns, and scale advertising. Privacy Policy | Terms | App Permissions | Data Deletion",
    openGraph: {
      title: "Centxo Digital Solution - Facebook/Meta Ads Management",
      description:
        "Facebook and Meta advertising management platform. Privacy Policy | Terms | App Permissions",
    },
    other: {
      "privacy-policy": `${base}/privacy`,
      "terms-of-service": `${base}/terms`,
    },
  };
}

// Google OAuth: Force static - full HTML at build time for crawlers (no streaming)
export const dynamic = "force-static";

// Search "Centxo-Deploy-v2026-02-01" in page source to verify production has latest code
export default async function LandingPage() {
  return (
    <>
      <LandingJsonLd />
    <div className="relative overflow-hidden min-h-screen" data-deploy-version="Centxo-Deploy-v2026-02-01">
      {/* NOSCRIPT: Critical content for crawlers without JavaScript */}
      <noscript>
        <div style={{
          padding: '1.5rem 2rem',
          margin: '2rem auto',
          maxWidth: '720px',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#0f172a' }}>Centxo Digital Solution: Facebook and Meta Ads Management Platform</h1>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#334155' }}>Purpose of this Application</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '0.75rem', color: '#475569' }}>
            Centxo Digital Solution is a professional platform for managing Facebook and Meta advertising campaigns. We help businesses manage multiple ad accounts, create and optimize campaigns, track performance, and export data to Google Sheets.
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1rem', color: '#475569' }}>
            <strong style={{ color: '#0f172a' }}>How we use Google data:</strong> When you sign in with Google, we collect your email address and name solely for authentication and account management. We use the Google Sheets API for optional ad data export—we only write to spreadsheets you create or select. We do not share your data with third parties.
          </p>
          <p style={{ fontSize: '0.9375rem', marginTop: '1rem' }}>
            <a href={`${BASE_URL}/privacy`} style={{ color: '#2563eb', textDecoration: 'underline', marginRight: '1rem' }}>Privacy Policy</a>
            <a href={`${BASE_URL}/terms`} style={{ color: '#2563eb', textDecoration: 'underline', marginRight: '1rem' }}>Terms of Service</a>
            <a href={`${BASE_URL}/app-permissions`} style={{ color: '#2563eb', textDecoration: 'underline', marginRight: '1rem' }}>App Permissions</a>
            <a href={`${BASE_URL}/data-deletion`} style={{ color: '#2563eb', textDecoration: 'underline' }}>Data Deletion</a>
          </p>
        </div>
      </noscript>
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10 pt-4 pb-16">
        {/* Purpose - prominent, server-rendered (Google OAuth verification) */}
        <section id="app-purpose" className="mb-12 py-6 px-6 rounded-xl border-2 border-primary/20 bg-card/60 max-w-3xl mx-auto" aria-label="Application purpose">
          <h2 className="text-lg font-semibold text-foreground mb-3 text-center">
            Purpose of this Application
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
            <strong className="text-foreground/90">Centxo Digital Solution</strong> is a Facebook and Meta ads management platform. We help businesses manage multiple ad accounts, create and optimize campaigns, track performance, and export data to Google Sheets.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-center">
            We use Google Sign-In for authentication and Google Sheets API for optional ad data export. We collect only your email and name for account management. We do not share your data with third parties.
          </p>
          <p className="text-xs text-center">
            <a href={`${BASE_URL}/privacy`} className="text-primary hover:underline font-medium">Privacy Policy</a>
            {" · "}
            <a href={`${BASE_URL}/terms`} className="text-primary hover:underline">Terms of Service</a>
            {" · "}
            <a href={`${BASE_URL}/app-permissions`} className="text-primary hover:underline">App Permissions</a>
            {" · "}
            <a href={`${BASE_URL}/data-deletion`} className="text-primary hover:underline">Data Deletion</a>
          </p>
        </section>

        <LandingPageClient />
      </div>
    </div>
    </>
  );
}
