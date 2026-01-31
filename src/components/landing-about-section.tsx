
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
        About Centxo
      </h2>
      <p className="text-base text-foreground leading-relaxed mb-6">
        <strong>Centxo</strong> integrates with your Google account to
        authenticate your identity and streamline Facebook/Meta ad campaign
        management. We use your Google email and name to create your account
        and personalize your experience.
      </p>

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
