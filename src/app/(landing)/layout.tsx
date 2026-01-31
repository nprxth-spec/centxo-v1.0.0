import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LandingFooter } from "@/components/landing-footer";
import { LandingFooterLinks } from "@/components/landing-footer-links";

/** OAuth Console requires exact match - always use production URL */
const PRIVACY_URL = "https://www.centxo.com/privacy";
const TERMS_URL = "https://www.centxo.com/terms";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar: Privacy Policy & Terms - First visible content for Google OAuth verification */}
      <div className="w-full bg-muted/50 border-b py-2 px-4 text-center text-sm">
        <Link href={PRIVACY_URL} className="text-primary font-medium hover:underline mx-2">Privacy Policy</Link>
        <span className="text-muted-foreground">|</span>
        <Link href={TERMS_URL} className="text-primary font-medium hover:underline mx-2">Terms of Service</Link>
      </div>
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-20">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href={PRIVACY_URL} className="text-sm font-medium text-primary hover:underline underline-offset-4" title="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href={TERMS_URL} className="text-sm font-medium text-primary hover:underline underline-offset-4" title="Terms of Service">
            Terms of Service
          </Link>
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
