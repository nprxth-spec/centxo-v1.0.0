// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

/**
 * Footer with CLICKABLE Privacy Policy & Terms links for Google OAuth.
 * Uses standard <a> tags with href - must be clickable and lead to real pages.
 */
export function LandingFooterLinks() {
  return (
    <div className="w-full" data-footer-version={FOOTER_VERSION}>
      {/* Privacy Policy & Terms - CLICKABLE links, relative paths work on any domain */}
      <div
        className="w-full py-6 px-4 border-t text-center"
        style={{
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
        }}
      >
        <p className="text-lg md:text-xl font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
          <a
            href="/privacy"
            title="Privacy Policy"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: "hsl(var(--primary))" }}
          >
            Privacy Policy
          </a>
          <span className="mx-3" style={{ color: "hsl(var(--foreground))" }}>|</span>
          <a
            href="/terms"
            title="Terms of Service"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: "hsl(var(--primary))" }}
          >
            Terms of Service
          </a>
        </p>
        <p className="text-sm md:text-base" style={{ color: "hsl(var(--foreground))" }}>
          <a href="/privacy" className="underline break-all" style={{ color: "hsl(var(--primary))" }}>
            https://www.centxo.com/privacy
          </a>
          {" · "}
          <a href="/terms" className="underline break-all" style={{ color: "hsl(var(--primary))" }}>
            https://www.centxo.com/terms
          </a>
        </p>
      </div>
    </div>
  );
}
