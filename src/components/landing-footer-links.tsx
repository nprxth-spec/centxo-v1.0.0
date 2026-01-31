import Link from "next/link";

// Server component - no hooks, no hydration mismatch
const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.NEXTAUTH_URL ||
  "https://centxo.com";
const PRIVACY_URL = `${BASE_URL.replace(/\/$/, "")}/privacy`;
const TERMS_URL = `${BASE_URL.replace(/\/$/, "")}/terms`;

// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

export function LandingFooterLinks() {
  return (
    <div className="flex flex-col gap-2 items-center text-center" data-footer-version={FOOTER_VERSION}>
      <p className="text-base font-semibold text-foreground">
        <Link
          href={PRIVACY_URL}
          className="text-primary hover:underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        {" · "}
        <Link
          href={TERMS_URL}
          className="text-primary hover:underline underline-offset-4"
        >
          Terms of Service
        </Link>
      </p>
      <p className="text-xs text-muted-foreground">
        <Link href={PRIVACY_URL} className="hover:underline">
          {PRIVACY_URL}
        </Link>
        {" · "}
        <Link href={TERMS_URL} className="hover:underline">
          {TERMS_URL}
        </Link>
      </p>
    </div>
  );
}
