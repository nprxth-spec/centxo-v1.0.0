import { headers } from "next/headers";
import { LandingPurposeSection } from "@/components/landing-purpose-section";
import { LandingPageClient } from "@/components/landing-page-client";

async function getBaseUrl() {
  const prod = (process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL || "https://www.centxo.com").replace(/\/$/, "");
  if (prod && !prod.includes("localhost")) return prod;
  try {
    const h = await headers();
    const host = h.get("host") || h.get("x-forwarded-host");
    const proto = h.get("x-forwarded-proto") || "https";
    if (host && !host.includes("localhost")) return `${proto}://${host}`.replace(/\/$/, "");
  } catch {
    /* ignore */
  }
  return "https://www.centxo.com";
}

export async function generateMetadata() {
  const BASE_URL = await getBaseUrl();
  const PRIVACY_URL = `${BASE_URL}/privacy`;
  return {
    title: "Centxo - Facebook/Meta Ads Management",
    description:
      "Purpose of this application: Centxo is a Facebook/Meta ads management application. Privacy Policy: " +
      PRIVACY_URL,
    openGraph: {
      title: "Centxo - Purpose & Privacy Policy",
      description:
        "Purpose: Facebook/Meta ads management. Privacy Policy: " + PRIVACY_URL,
    },
  };
}

// Search "Centxo-Deploy-v2025-01-31" in page source to verify production has latest code
export default async function LandingPage() {
  return (
    <div className="relative overflow-hidden min-h-screen" data-deploy-version="Centxo-Deploy-v2025-01-31">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-12 pb-32">
        {/* Server-rendered: Application Purpose + Privacy/Terms links (required for Google OAuth verification) */}
        <LandingPurposeSection />

        {/* Client-rendered: Hero, CTA, Bento grid */}
        <LandingPageClient />
      </div>
    </div>
  );
}
