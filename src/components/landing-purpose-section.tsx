/**
 * Purpose of application + Privacy/Terms - compact section for Google OAuth.
 * Server-rendered, professional international design.
 */
export function LandingPurposeSection() {
  return (
    <section
      id="app-purpose"
      className="max-w-3xl mx-auto mt-16 mb-20 px-6 py-8 rounded-xl border bg-card/80 backdrop-blur-sm shadow-sm"
      aria-label="About Centxo"
    >
      <h2 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
        Purpose of this application
      </h2>
      <p className="text-foreground/90 text-[15px] leading-relaxed mb-5">
        <strong>Centxo</strong> is a Facebook and Meta ads management platform. We help businesses manage multiple ad accounts, create and optimize campaigns, track performance (ROAS, CTR), export to Google Sheets, and automate rules. We use Google Sign-In for authentication only—we collect email and name for account creation. We do not access other Google services or share your data.
      </p>
      <p className="text-sm text-muted-foreground">
        <a href="https://www.centxo.com/privacy" className="text-primary hover:underline font-medium">
          Privacy Policy
        </a>
        <span className="mx-2 text-muted-foreground/60">·</span>
        <a href="https://www.centxo.com/terms" className="text-primary hover:underline font-medium">
          Terms of Service
        </a>
      </p>
    </section>
  );
}
