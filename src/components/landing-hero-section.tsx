import Link from "next/link";

/** OAuth Console requires exact match */
const PRIVACY_URL = "https://www.centxo.com/privacy";
const TERMS_URL = "https://www.centxo.com/terms";

/**
 * Server-rendered hero section for Google OAuth verification.
 * Uses plain English - no translations - for global review team.
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
        We use your Google data (email, name) to authenticate your identity and
        create your account. Sign in with Google or Facebook to get started.
      </p>
      <p className="text-sm text-muted-foreground">
        By using this app you agree to our{" "}
        <Link
          href={PRIVACY_URL}
          className="text-primary font-medium underline hover:no-underline"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href={TERMS_URL}
          className="text-primary font-medium underline hover:no-underline"
        >
          Terms of Service
        </Link>
        .
      </p>
    </section>
  );
}
