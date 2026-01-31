import { LandingPurposeSection } from "@/components/landing-purpose-section";
import { LandingPageClient } from "@/components/landing-page-client";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
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
