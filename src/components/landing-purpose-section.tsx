import Link from "next/link";

/**
 * Server-rendered section for Google OAuth verification.
 * Ensures purpose and privacy policy links are in the initial HTML for crawlers.
 */
export function LandingPurposeSection() {
  return (
    <article id="app-purpose">
      <section
        className="max-w-3xl mx-auto mb-10 px-4 py-6 rounded-xl bg-card/80 border"
        aria-label="Application purpose"
      >
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Application Purpose
        </h1>
        <p className="text-base text-foreground leading-relaxed mb-4">
          Centxo is a Facebook/Meta ads management platform. Our purpose is to
          help businesses manage multiple ad accounts, create and optimize
          campaigns, export ad data to Google Sheets, and automate ad
          performance with AI. We provide a unified interface to manage
          Facebook advertising efficiently.
        </p>
        <p className="text-sm text-muted-foreground">
          Read our{" "}
          <Link
            href="/privacy"
            className="text-primary font-medium hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
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
