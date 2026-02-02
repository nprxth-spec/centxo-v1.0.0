"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { LandingFooterLinks } from "@/components/landing-footer-links";

export function LandingFooter() {
  const { t } = useLanguage();

  return (
    <footer className="w-full shrink-0 border-t bg-background">
      <div className="container py-4 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Centxo Digital Solution
          </p>
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 sm:gap-x-3 gap-y-1" aria-label="Footer">
            <LandingFooterLinks />
            <span className="text-muted-foreground/40">·</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <Link href="/data-deletion" className="hover:text-foreground transition-colors">
              {t("landing.footer.deletion")}
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </footer>
  );
}
