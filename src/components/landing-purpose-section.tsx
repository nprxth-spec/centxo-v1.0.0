/** Use relative paths for clickable links */

/**
 * Server-rendered section for Google OAuth verification.
 * Purpose of app + prominent Privacy Policy links.
 */
// Version marker - search "Centxo-Landing-v" in page source to verify deployment
const LANDING_VERSION = "Centxo-Landing-v2025-01-31";

export async function LandingPurposeSection() {
  return (
    <article id="app-purpose" className="mb-10" data-landing-version={LANDING_VERSION}>
      {/* noscript: Crawlers without JS still see purpose & privacy */}
      <noscript>
        <div style={{ padding: 16, marginBottom: 16, background: "#f5f5f5", border: "1px solid #ddd" }}>
          <h2>Purpose of this application</h2>
          <p>Centxo is a Facebook/Meta ads management tool. We use your Google data to authenticate your identity and manage your ad account access.</p>
          <p><strong>Privacy Policy:</strong> <a href="/privacy">https://www.centxo.com/privacy</a></p>
          <p><strong>Terms of Service:</strong> <a href="/terms">https://www.centxo.com/terms</a></p>
        </div>
      </noscript>
      {/* Google OAuth: Purpose + Privacy - server-rendered, visible without login */}
      <section
        className="max-w-3xl mx-auto mb-6 px-4 py-6 rounded-xl bg-card border-2 border-primary/20"
        aria-label="Application purpose"
      >
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Purpose of this application
        </h1>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          <strong>Centxo</strong> is a Facebook/Meta ads management platform.
          We help businesses manage multiple ad accounts, create and optimize
          campaigns, export ad data to Google Sheets, and automate ad
          performance with AI. We provide a unified interface to manage
          Facebook advertising efficiently.
        </p>
        <p className="text-base text-foreground leading-relaxed mb-4">
          We use your Google data (email, name) to authenticate your identity,
          create your account, and manage your ad account access. Sign in with
          Google or Facebook to get started.
        </p>
        <p className="text-base font-medium text-foreground mb-2">
          Privacy Policy:{" "}
          <a href="/privacy" className="text-primary font-semibold underline break-all">
            https://www.centxo.com/privacy
          </a>
        </p>
        <p className="text-sm text-foreground">
          Read our{" "}
          <a href="/privacy" className="text-primary font-semibold underline hover:opacity-80">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="text-primary font-semibold underline hover:opacity-80">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </article>
  );
}
