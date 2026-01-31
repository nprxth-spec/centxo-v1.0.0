import Link from "next/link";

/** OAuth Console requires exact match - always use production URL */
const PRIVACY_URL = "https://www.centxo.com/privacy";
const TERMS_URL = "https://www.centxo.com/terms";

// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

export function LandingFooterLinks() {
  return (
    <div className="w-full" data-footer-version={FOOTER_VERSION}>
      {/* Google OAuth: Privacy Policy & Terms - last row at bottom, standard footer placement */}
      <div className="w-full py-5 px-4 bg-background/80 border-t text-center">
        <p className="text-base md:text-lg font-bold text-foreground mb-2">
          <Link
            href={PRIVACY_URL}
            className="text-primary hover:underline underline-offset-4 font-bold"
            title="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <span className="text-muted-foreground mx-2">|</span>
          <Link
            href={TERMS_URL}
            className="text-primary hover:underline underline-offset-4 font-bold"
            title="Terms of Service"
          >
            Terms of Service
          </Link>
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          <Link href={PRIVACY_URL} className="text-primary hover:underline break-all">
            {PRIVACY_URL}
          </Link>
          <span className="mx-2">·</span>
          <Link href={TERMS_URL} className="text-primary hover:underline break-all">
            {TERMS_URL}
          </Link>
        </p>
      </div>
    </div>
  );
}
