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
      {/* NOSCRIPT: Links for crawlers without JavaScript (Google OAuth) */}
      <noscript>
        <div style={{ padding: "1rem 2rem", margin: "1rem auto", maxWidth: "720px", fontFamily: "system-ui, sans-serif" }}>
          <p style={{ fontSize: "0.875rem", color: "#64748b", marginBottom: "0.5rem" }}>
            Centxo Digital Solution · Facebook and Meta Ads Management
          </p>
          <p style={{ fontSize: "0.875rem" }}>
            <a href={`${BASE_URL}/privacy`} style={{ color: "#2563eb", textDecoration: "underline", marginRight: "1rem" }}>Privacy Policy</a>
            <a href={`${BASE_URL}/terms`} style={{ color: "#2563eb", textDecoration: "underline", marginRight: "1rem" }}>Terms</a>
            <a href={`${BASE_URL}/app-permissions`} style={{ color: "#2563eb", textDecoration: "underline", marginRight: "1rem" }}>App Permissions</a>
            <a href={`${BASE_URL}/contact`} style={{ color: "#2563eb", textDecoration: "underline", marginRight: "1rem" }}>Contact</a>
            <a href={`${BASE_URL}/data-deletion`} style={{ color: "#2563eb", textDecoration: "underline" }}>Data Deletion</a>
          </p>
        </div>
      </noscript>
      
      {/* Background - Luxury gradient mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,hsl(var(--primary)/0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,hsl(var(--primary)/0.12),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.04),transparent_60%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_100%,hsl(var(--primary)/0.04),transparent_60%)] dark:bg-[radial-gradient(circle_at_0%_100%,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 dark:to-muted/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10 pt-4 pb-16">
        <LandingPageClient />
      </div>
    </div>
    </>
  );
}
