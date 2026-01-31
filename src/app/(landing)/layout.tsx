import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LandingFooter } from "@/components/landing-footer";

// Base URL - must match Google OAuth Console (Privacy Policy URL exactly)
const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.NEXTAUTH_URL ||
  "https://centxo.com";
const PRIVACY_URL = `${BASE_URL.replace(/\/$/, "")}/privacy`;
const TERMS_URL = `${BASE_URL.replace(/\/$/, "")}/terms`;

export default function LandingLayout({
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
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}
