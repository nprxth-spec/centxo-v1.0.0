/**
 * Server-rendered hero section for Google OAuth verification.
 * Uses plain English - no translations - for global review team.
 * Privacy/Terms use <a> tags for clickable links.
 */
export function LandingHeroSection() {
  return (
    <section
      className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
      aria-label="About Centxo"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-foreground">
        Centxo: Facebook and Meta Ads Management Platform
      </h1>
      <div className="mb-6 p-6 rounded-xl bg-primary/5 border-2 border-primary/30">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What is Centxo?
        </h2>
        <p className="text-lg text-foreground mb-4 leading-relaxed">
          Centxo is a comprehensive platform designed for Facebook and Meta advertising management.
          Our platform helps businesses and advertisers to manage multiple Facebook ad accounts,
          create and optimize advertising campaigns, analyze performance data, and scale their
          advertising operations efficiently.
        </p>
        <p className="text-base text-foreground mb-4 leading-relaxed">
          <strong>Key features include:</strong> Multi-account management, AI-powered campaign
          creation and optimization, real-time performance tracking, automated reporting,
          Google Sheets data export, and intelligent budget allocation.
        </p>
      </div>
      <div className="mb-6 p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          How We Use Your Google Account
        </h3>
        <p className="text-base text-foreground leading-relaxed">
          Centxo uses Google Sign-In to authenticate users securely. When you sign in with Google,
          we collect your email address and name to create your account and provide personalized
          features. We use this information solely for account management and authentication.
          Your data is protected and we do not share it with third parties.
        </p>
      </div>
      <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-400 dark:border-yellow-600 mb-6">
        <p className="text-base font-semibold text-foreground mb-2">
          📋 Privacy Policy:
        </p>
        <a 
          href="/privacy" 
          className="text-lg text-primary font-bold underline hover:opacity-80 break-all"
        >
          https://www.centxo.com/privacy
        </a>
      </div>
      <p className="text-base text-foreground">
        By using this application, you agree to our{" "}
        <a href="/privacy" className="text-primary font-bold underline hover:opacity-80 text-lg">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary font-bold underline hover:opacity-80 text-lg">
          Terms of Service
        </a>
        .
      </p>
    </section>
  );
}
