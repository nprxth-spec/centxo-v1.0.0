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
      <div className="mb-6 p-6 rounded-xl bg-primary/5 border-2 border-primary/30 text-left">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Purpose of Centxo – What This Application Does
        </h2>
        <p className="text-lg text-foreground mb-4 leading-relaxed">
          <strong>Centxo</strong> is a professional Facebook and Meta ads management platform. Our purpose is to help businesses, marketing agencies, and advertisers manage their Facebook advertising operations from a single dashboard.
        </p>
        <p className="text-base text-foreground mb-3 leading-relaxed">
          <strong>Detailed application purpose:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
          <li><strong>Multi-account management:</strong> Connect and manage multiple Facebook ad accounts in one place</li>
          <li><strong>Campaign creation & optimization:</strong> Create ad campaigns, set budgets, and optimize with AI suggestions</li>
          <li><strong>Performance tracking:</strong> Monitor ROAS, CTR, conversions, and spend in real time</li>
          <li><strong>Google Sheets export:</strong> Export ad performance data to Google Sheets for custom reporting</li>
          <li><strong>Automation rules:</strong> Set rules to pause or adjust ads based on performance (e.g., if ROAS &lt; 2.0 then pause)</li>
          <li><strong>Bulk operations:</strong> Launch and manage hundreds of ads efficiently</li>
        </ul>
        <p className="text-base text-foreground leading-relaxed">
          <strong>Who it&apos;s for:</strong> Businesses running Facebook/Meta ads, marketing agencies managing client accounts, and advertisers who need a unified tool for campaign management and reporting.
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
          href="https://www.centxo.com/privacy" 
          className="text-lg text-primary font-bold underline hover:opacity-80 break-all"
        >
          https://www.centxo.com/privacy
        </a>
      </div>
      <p className="text-base text-foreground">
        By using this application, you agree to our{" "}
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
  );
}
