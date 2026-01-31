import Link from "next/link";
import { headers } from "next/headers";

async function getBaseUrl() {
  try {
    const h = await headers();
    const host = h.get("host") || h.get("x-forwarded-host");
    const proto = h.get("x-forwarded-proto") || "https";
    if (host) return `${proto}://${host}`.replace(/\/$/, "");
  } catch {
    /* ignore */
  }
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXTAUTH_URL ||
    "https://www.centxo.com"
  ).replace(/\/$/, "");
}

// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

export async function LandingFooterLinks() {
  const BASE_URL = await getBaseUrl();
  const PRIVACY_URL = `${BASE_URL}/privacy`;
  const TERMS_URL = `${BASE_URL}/terms`;
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
