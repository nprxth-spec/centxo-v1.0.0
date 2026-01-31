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
      {/* GOOGLE OAUTH: Purpose + Privacy - FIRST content, absolute URLs, plain <a> tags */}
      <div className="w-full bg-blue-600 text-white py-4 px-4 text-center border-b-4 border-blue-800">
        <h1 className="text-lg md:text-xl font-bold mb-2">Purpose of this application</h1>
        <p className="text-sm md:text-base mb-3 max-w-3xl mx-auto">
          Centxo is a Facebook and Meta ads management platform. We help businesses manage multiple ad accounts, create and optimize campaigns, and export data to Google Sheets. We use Google Sign-In for authentication.
        </p>
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
        {/* Google OAuth: Above-fold purpose - visible without scroll, server-rendered */}
        <div className="w-full bg-primary/5 border-b border-primary/10 py-3 px-4 text-center">
          <p className="text-sm md:text-base text-foreground font-medium max-w-3xl mx-auto">
            <strong>Centxo</strong> is a Facebook/Meta ads management tool. We use your Google data to authenticate your identity and manage your ad account access.
          </p>
        </div>
        {children}
      </main>
      <LandingFooter footerLinks={<LandingFooterLinks />} />
    </div>
  );
}
