import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LandingFooter } from "@/components/landing-footer";
import { LandingFooterLinks } from "@/components/landing-footer-links";

/** Google OAuth requires EXACT match - use absolute URLs */
const PRIVACY_URL = "https://www.centxo.com/privacy";
const TERMS_URL = "https://www.centxo.com/terms";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      {/* GOOGLE OAUTH: Purpose + Privacy - FIRST content, detailed explanation */}
      <div className="w-full bg-blue-600 text-white py-5 px-4 text-center border-b-4 border-blue-800">
        <h1 className="text-xl md:text-2xl font-bold mb-3">Purpose of this application</h1>
        <div className="max-w-4xl mx-auto space-y-2 text-left md:text-center mb-4">
          <p className="text-sm md:text-base">
            <strong>Centxo</strong> is a Facebook and Meta ads management platform. Our purpose is to help businesses, advertisers, and marketing agencies manage their Facebook advertising operations more efficiently.
          </p>
          <p className="text-sm md:text-base">
            <strong>What Centxo does:</strong> Manage multiple Facebook ad accounts from one dashboard; create and optimize ad campaigns with AI assistance; track performance metrics (ROAS, CTR, conversions); export data to Google Sheets; automate campaign rules and budgets; generate reports.
          </p>
          <p className="text-sm md:text-base">
            <strong>Why we use Google Sign-In:</strong> We collect your email and name solely for account creation and authentication. We do not access Google Ads, Gmail, or other Google services. Your data is not shared with third parties.
          </p>
        </div>
        <p className="text-base md:text-lg font-bold">
          Privacy Policy:{" "}
          <a href="https://www.centxo.com/privacy" className="underline text-white hover:opacity-90">
            https://www.centxo.com/privacy
          </a>
          {" | "}
          <a href="https://www.centxo.com/terms" className="underline text-white hover:opacity-90">
            Terms of Service
          </a>
        </p>
      </div>
      
      {/* Top bar: Privacy Policy & Terms */}
      <div className="w-full bg-muted/50 border-b py-2 px-4 text-center text-sm">
        <a href={PRIVACY_URL} className="text-blue-600 dark:text-blue-400 font-medium underline mx-2">Privacy Policy</a>
        <span className="text-muted-foreground">|</span>
        <a href={TERMS_URL} className="text-blue-600 dark:text-blue-400 font-medium underline mx-2">Terms of Service</a>
      </div>
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-20">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a href={PRIVACY_URL} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4" title="Privacy Policy">
            Privacy Policy
          </a>
          <a href={TERMS_URL} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4" title="Terms of Service">
            Terms of Service
          </a>
          <Link href="/login">
            <Button size="sm" className="rounded-full px-6">Get Started</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        {/* Purpose summary - visible without scroll */}
        <div className="w-full bg-slate-100 dark:bg-slate-900 border-b py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-foreground mb-2">Application Purpose (Centxo)</h2>
            <p className="text-sm text-foreground leading-relaxed mb-2">
              Centxo is a professional platform for managing Facebook and Meta advertising. We help businesses manage multiple ad accounts, create campaigns, optimize ad spend, track ROAS and CTR, export to Google Sheets, and automate rules. We use Google Sign-In only for authentication (email, name)—we do not access other Google data or share your information.
            </p>
            <p className="text-xs text-muted-foreground">
              <a href="https://www.centxo.com/privacy" className="text-blue-600 dark:text-blue-400 underline">Privacy Policy</a>
              {" · "}
              <a href="https://www.centxo.com/terms" className="text-blue-600 dark:text-blue-400 underline">Terms of Service</a>
            </p>
          </div>
        </div>
        {children}
      </main>
      <LandingFooter footerLinks={<LandingFooterLinks />} />
    </div>
  );
}
