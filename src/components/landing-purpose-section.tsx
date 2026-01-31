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
          <p><strong>Privacy Policy:</strong> <a href="https://www.centxo.com/privacy">https://www.centxo.com/privacy</a></p>
          <p><strong>Terms of Service:</strong> <a href="https://www.centxo.com/terms">https://www.centxo.com/terms</a></p>
        </div>
      </noscript>
      {/* Google OAuth: Purpose + Privacy - server-rendered, visible without login */}
      <section
        className="max-w-3xl mx-auto mb-6 px-4 py-8 rounded-xl bg-card border-2 border-primary/20"
        aria-label="Application purpose"
      >
        <h1 className="text-3xl font-bold text-foreground mb-6">
          Detailed Application Purpose
        </h1>
        <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            What Does Centxo Do?
          </h2>
          <p className="text-base text-foreground leading-relaxed mb-4">
            <strong>Centxo</strong> is a professional Facebook and Meta advertising management platform
            designed to help businesses and marketing professionals manage their advertising operations
            more effectively. Our platform provides comprehensive tools for campaign management,
            performance analysis, and optimization.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            <strong>Core functions include:</strong> Managing multiple Facebook ad accounts from a single
            dashboard, creating and optimizing advertising campaigns with AI assistance, tracking real-time
            performance metrics (ROAS, CTR, conversions), exporting data to Google Sheets for custom
            reporting, automating campaign rules and budgets, and generating professional reports for clients.
          </p>
        </div>
        
        <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            How We Use Your Google Account Data
          </h3>
          <p className="text-base text-foreground leading-relaxed mb-3">
            When you sign in with Google, Centxo collects and uses the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
            <li>
              <strong>Email address:</strong> Used for account creation, login authentication,
              account recovery, and important notifications about your account.
            </li>
            <li>
              <strong>Full name:</strong> Used to personalize your experience and display your
              profile information within the application.
            </li>
          </ul>
          <p className="text-base text-foreground leading-relaxed font-semibold">
            We do not access, collect, or use any other Google data. We do not access your Google Ads,
            Gmail, Google Drive, or any other Google services.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-400 dark:border-yellow-600 mb-4">
          <p className="text-xl font-bold text-foreground mb-3">
            📄 Privacy Policy (Required Reading)
          </p>
          <a 
            href="https://www.centxo.com/privacy" 
            className="text-xl text-primary font-bold underline hover:opacity-80 break-all block mb-2"
          >
            https://www.centxo.com/privacy
          </a>
          <p className="text-base text-foreground mt-3">
            Our Privacy Policy explains in detail what data we collect, how we use it,
            how we protect it, and your rights regarding your personal information.
          </p>
        </div>

        <p className="text-base text-foreground text-center">
          By using this application, you acknowledge that you have read and agree to our{" "}
          <a href="https://www.centxo.com/privacy" className="text-primary font-bold underline hover:opacity-80 text-lg">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://www.centxo.com/terms" className="text-primary font-bold underline hover:opacity-80 text-lg">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </article>
  );
}
