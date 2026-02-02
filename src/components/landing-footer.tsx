"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { LandingFooterLinks } from "@/components/landing-footer-links";

export function LandingFooter() {
  return (
    <footer className="w-full shrink-0 border-t border-foreground/5 dark:border-white/5 bg-background/80 dark:bg-background/60 backdrop-blur-sm">
      <div className="container py-6 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Centxo Digital Solution
          </p>
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 sm:gap-x-3 gap-y-1" aria-label="Footer">
            <LandingFooterLinks />
            <span className="text-muted-foreground/40">·</span>
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </footer>
  );
}
