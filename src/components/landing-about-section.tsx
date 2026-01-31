
/**
 * About Centxo & Key Features - server-rendered for Google OAuth verification.
 * Explains exactly how the app uses Google data. Plain English, no template text.
 */
export function LandingAboutSection() {
  return (
    <section
      id="about-centxo"
      className="max-w-3xl mx-auto mb-12 px-4 py-8 rounded-xl bg-card border-2 border-primary/20"
      aria-label="About Centxo and Key Features"
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">
        About Centxo - Complete Platform Overview
      </h2>
      <p className="text-base text-foreground leading-relaxed mb-6">
        <strong>Centxo</strong> is a professional Facebook and Meta advertising management platform
        that integrates with your Google account for secure authentication. Our platform provides
        comprehensive tools for managing advertising campaigns, tracking performance metrics,
        optimizing ad spend, and generating detailed reports.
      </p>
      <p className="text-base text-foreground leading-relaxed mb-6">
        When you sign in with Google, we collect your email address and full name. This information
        is used exclusively to create and manage your Centxo account, provide personalized features,
        and ensure secure access to your advertising data. We do not access your Google Ads data
        or other Google services beyond basic profile information.
      </p>

      <div className="mb-6 p-4 rounded-lg bg-primary/5 border-2 border-primary/30">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          🔒 Security &amp; Privacy Commitment
        </h3>
        <p className="text-base text-foreground leading-relaxed mb-3">
          Centxo uses Google OAuth 2.0 for secure authentication and follows Google&apos;s
          data safety standards. We implement industry-standard security measures to protect
          your information. We do not share, sell, or transfer your personal data to third parties.
        </p>
        <p className="text-base font-semibold text-foreground">
          Read our full{" "}
          <a href="https://www.centxo.com/privacy" className="text-primary font-bold underline hover:opacity-80">
            Privacy Policy
          </a>{" "}
          for complete details on data handling.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-4">
        Key Features – How It Works
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
        <li>
          <strong>Multi-Account Management:</strong> Connect multiple Facebook
          ad accounts in one dashboard
        </li>
        <li>
          <strong>Campaign Creation & Optimization:</strong> Create and manage
          ad campaigns with AI-powered suggestions
        </li>
        <li>
          <strong>Google Sheets Export:</strong> Export ad performance data to
          Google Sheets for reporting
        </li>
        <li>
          <strong>Automation Rules:</strong> Set rules to pause or adjust ads
          based on performance (e.g., ROAS, CTR)
        </li>
      </ul>

      <p className="text-base text-foreground leading-relaxed">
        <strong>Why we request Google data:</strong> We use Google Sign-In to
        verify your identity and create your account. Your email is used for
        login and account recovery. We do not sell your data to third parties.
      </p>
    </section>
  );
}
