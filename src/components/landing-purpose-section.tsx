import Link from "next/link";
import { headers } from "next/headers";

/**
 * Get base URL from request - matches www.centxo.com or centxo.com for Google OAuth
 * Privacy Policy href must match OAuth Console exactly (www vs non-www)
 */
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

/**
 * Server-rendered section for Google OAuth verification.
 * Uses exact phrasing Google looks for: "purpose of your app", "Privacy Policy"
 */
// Version marker - search "Centxo-Landing-v" in page source to verify deployment
const LANDING_VERSION = "Centxo-Landing-v2025-01-31";

export async function LandingPurposeSection() {
  const BASE_URL = await getBaseUrl();
  const PRIVACY_URL = `${BASE_URL}/privacy`;
  const TERMS_URL = `${BASE_URL}/terms`;
  return (
    <article id="app-purpose" className="mb-10" data-landing-version={LANDING_VERSION}>
      {/* noscript: Crawlers without JS still see purpose & privacy */}
      <noscript>
        <div style={{ padding: 16, marginBottom: 16, background: "#f5f5f5", border: "1px solid #ddd" }}>
          <h2>Purpose of this application</h2>
          <p>Centxo is a Facebook/Meta ads management application. The purpose of this application is to help businesses manage multiple ad accounts, create and optimize campaigns, export ad data to Google Sheets, and automate ad performance with AI. We provide a unified interface to manage Facebook advertising efficiently.</p>
          <p><strong>Privacy Policy:</strong> <a href={PRIVACY_URL}>{PRIVACY_URL}</a></p>
          <p><strong>Terms of Service:</strong> <a href={TERMS_URL}>{TERMS_URL}</a></p>
        </div>
      </noscript>
      {/* Google OAuth: Purpose + Privacy - server-rendered, visible without login */}
      <section
        className="max-w-3xl mx-auto mb-6 px-4 py-6 rounded-xl bg-card border-2 border-primary/20"
        aria-label="Application purpose"
      >
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Purpose of this application
        </h1>
        <p className="text-base text-foreground leading-relaxed mb-4">
          Centxo is a Facebook/Meta ads management application. The purpose of
          this application is to help businesses manage multiple ad accounts,
          create and optimize campaigns, export ad data to Google Sheets, and
          automate ad performance with AI. We provide a unified interface to
          manage Facebook advertising efficiently.
        </p>
        <p className="text-base font-medium text-foreground mb-2">
          Privacy Policy:{" "}
          <Link
            href={PRIVACY_URL}
            className="text-primary font-semibold underline break-all"
          >
            {PRIVACY_URL}
          </Link>
        </p>
        <p className="text-sm text-muted-foreground">
          Read our{" "}
          <Link
            href={PRIVACY_URL}
            className="text-primary font-medium hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href={TERMS_URL}
            className="text-primary font-medium hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
