import Link from "next/link";

// Base URL must match exactly what's in Google OAuth Console (Privacy Policy URL)
const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.NEXTAUTH_URL ||
  "https://centxo.com";
const PRIVACY_URL = `${BASE_URL.replace(/\/$/, "")}/privacy`;
const TERMS_URL = `${BASE_URL.replace(/\/$/, "")}/terms`;

/**
 * Server-rendered section for Google OAuth verification.
 * Uses exact phrasing Google looks for: "purpose of your app", "Privacy Policy"
 * noscript fallback for crawlers that don't execute JavaScript
 */
export function LandingPurposeSection() {
  return (
    <article id="app-purpose" className="mb-10">
      {/* noscript: Crawlers without JS still see purpose & privacy */}
      <noscript>
        <div style={{ padding: 16, marginBottom: 16, background: "#f5f5f5", border: "1px solid #ddd" }}>
          <h2>Welcome to Centxo</h2>
          <p>Centxo is a Facebook/Meta ads management service. Sign in with Google or Facebook to manage your advertising data through Centxo.</p>
          <p><strong>Privacy Policy:</strong> <a href={PRIVACY_URL}>{PRIVACY_URL}</a></p>
          <p><strong>Terms of Service:</strong> <a href={TERMS_URL}>{TERMS_URL}</a></p>
        </div>
      </noscript>
      {/* Google OAuth: Welcome + Purpose + Privacy - server-rendered, visible without login */}
      <section
        className="max-w-3xl mx-auto mb-6 px-4 py-6 rounded-xl bg-card border-2 border-primary/20"
        aria-label="Welcome and application purpose"
      >
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Welcome to Centxo
        </h1>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          Centxo is a Facebook/Meta ads management service. This website helps
          businesses manage multiple ad accounts, create and optimize campaigns,
          export ad data to Google Sheets, and automate ad performance with AI.
        </p>
        <p className="text-base font-medium text-foreground mb-4">
          Sign in with Google or Facebook to manage your advertising data through Centxo.
          Click &quot;Get Started&quot; below to access the dashboard.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Purpose of this application: To provide a unified interface for managing
          Facebook advertising efficiently.
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
