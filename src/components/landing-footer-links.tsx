/** OAuth Console requires exact match - always use production URL */
const PRIVACY_URL = "https://www.centxo.com/privacy";
const TERMS_URL = "https://www.centxo.com/terms";

// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

/**
 * Footer with PROMINENT Privacy Policy & Terms links for Google OAuth.
 * Uses standard <a> tags, high contrast, large text - visible to crawlers.
 */
export function LandingFooterLinks() {
  return (
    <div className="w-full" data-footer-version={FOOTER_VERSION}>
      {/* High-contrast bar: Privacy Policy & Terms - clearly visible */}
      <div
        className="w-full py-6 px-4 border-t text-center"
        style={{
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
        }}
      >
        <p className="text-lg md:text-xl font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
          <a
            href={PRIVACY_URL}
            title="Privacy Policy"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: "hsl(var(--primary))" }}
          >
            Privacy Policy
          </a>
          <span className="mx-3" style={{ color: "hsl(var(--foreground))" }}>|</span>
          <a
            href={TERMS_URL}
            title="Terms of Service"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: "hsl(var(--primary))" }}
          >
            Terms of Service
          </a>
        </p>
        <p className="text-sm md:text-base mb-2" style={{ color: "hsl(var(--foreground))" }}>
          <a href={PRIVACY_URL} className="underline break-all" style={{ color: "hsl(var(--primary))" }}>
            {PRIVACY_URL}
          </a>
          <span className="mx-2">·</span>
          <a href={TERMS_URL} className="underline break-all" style={{ color: "hsl(var(--primary))" }}>
            {TERMS_URL}
          </a>
        </p>
      </div>
    </div>
  );
}
