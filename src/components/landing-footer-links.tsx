"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://centxo.online";

/**
 * Footer links - Privacy Policy (absolute URL for Google OAuth), Terms, App Permissions, Contact, Data Deletion.
 */
export function LandingFooterLinks() {
  const { t } = useLanguage();
  return (
    <>
      <a href={`${BASE_URL}/privacy`} className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
        Privacy Policy
      </a>
      <a href={`${BASE_URL}/terms`} className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
        Terms
      </a>
      <Link href="/app-permissions" className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
        App Permissions
      </Link>
      <Link href="/contact" className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
        Contact
      </Link>
      <Link href="/data-deletion" className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
        {t("landing.footer.deletion", "Data Deletion")}
      </Link>
    </>
  );
}
