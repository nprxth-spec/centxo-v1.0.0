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
        Centxo is a platform for Facebook and Meta ads management
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
        Helping users to manage multiple ad accounts, create and optimize
        campaigns, export data to Google Sheets, and scale their advertising
        business efficiently with AI-powered tools.
      </p>
      <p className="text-base text-foreground mb-4">
        Centxo uses your Google account information to provide a seamless login
        experience and sync your business data safely.
      </p>
      <p className="text-sm text-muted-foreground">
        By using this app you agree to our{" "}
        <a href="/privacy" className="text-primary font-medium underline hover:opacity-80">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary font-medium underline hover:opacity-80">
          Terms of Service
        </a>
        .
      </p>
    </section>
  );
}
