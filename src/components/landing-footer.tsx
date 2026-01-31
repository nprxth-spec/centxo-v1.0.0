"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

// Fallback for client - server-rendered footer links use dynamic URL from headers
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.centxo.com";
const PRIVACY_URL = `${BASE_URL.replace(/\/$/, "")}/privacy`;
const TERMS_URL = `${BASE_URL.replace(/\/$/, "")}/terms`;

export function LandingFooter({ footerLinks }: { footerLinks: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col gap-4 py-8 w-full shrink-0 px-4 md:px-6 border-t bg-muted/50">
      {/* Server-rendered: Privacy Policy & Terms - passed as child to avoid hydration mismatch */}
      {footerLinks}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
        <p
          className="text-xs text-muted-foreground"
          suppressHydrationWarning
        >
          &copy; {new Date().getFullYear()} Centxo. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 items-center">
          <Link href={TERMS_URL} className="text-xs hover:underline underline-offset-4">
            {t("landing.footer.terms")}
          </Link>
          <Link href={PRIVACY_URL} className="text-xs hover:underline underline-offset-4 font-medium">
            {t("landing.footer.privacy")}
          </Link>
          <Link href="/data-deletion" className="text-xs hover:underline underline-offset-4">
            {t("landing.footer.deletion")}
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </footer>
  );
}
