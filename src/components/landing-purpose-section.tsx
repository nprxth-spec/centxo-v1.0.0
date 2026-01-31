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
 */
export function LandingPurposeSection() {
  return (
    <article id="app-purpose" className="mb-10">
      {/* Google OAuth: Purpose + Privacy - plain text first for crawlers */}
      <section
        className="max-w-3xl mx-auto mb-6 px-4 py-6 rounded-xl bg-card border-2 border-primary/20"
        aria-label="Application purpose and privacy policy"
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
            className="text-primary font-semibold underline"
          >
            Privacy Policy
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
