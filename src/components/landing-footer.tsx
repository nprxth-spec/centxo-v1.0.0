"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function LandingFooter({ footerLinks }: { footerLinks: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col w-full shrink-0 border-t bg-muted/50">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between items-center py-6 px-4 md:px-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <p
            className="text-sm font-medium text-foreground"
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} Centxo. All rights reserved.
          </p>
          <p className="text-sm text-foreground">
            Support:{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="underline hover:opacity-80"
              style={{ color: "hsl(var(--primary))" }}
            >
              nprxth@gmail.com
            </a>
            {" · "}
            <a
              href="mailto:privacy@centxo.com"
              className="underline hover:opacity-80"
              style={{ color: "hsl(var(--primary))" }}
            >
              privacy@centxo.com
            </a>
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 items-center">
          <Link href="/data-deletion" className="text-sm hover:underline underline-offset-4 text-foreground">
            {t("landing.footer.deletion")}
          </Link>
          <LanguageToggle />
        </nav>
      </div>
      {/* Google OAuth: Privacy Policy & Terms - PROMINENT, last row */}
      {footerLinks}
    </footer>
  );
}
