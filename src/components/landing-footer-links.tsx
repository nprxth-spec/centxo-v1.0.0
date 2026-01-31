// Version marker - search "LandingFooterLinks-v" in page source to verify deployment
const FOOTER_VERSION = "LandingFooterLinks-v2025-01-31";

/**
 * Footer with CLICKABLE Privacy Policy & Terms links for Google OAuth.
 * Uses <a> tags - high contrast for visibility on all backgrounds.
 */
export function LandingFooterLinks() {
  return (
    <div className="w-full" data-footer-version={FOOTER_VERSION}>
      {/* Privacy Policy & Terms - clickable <a> tags, high-contrast colors */}
      <div className="w-full py-6 px-4 border-t text-center bg-slate-100 dark:bg-slate-900">
        <p className="text-lg md:text-xl font-bold mb-3">
          <a
            href="https://www.centxo.com/privacy"
            title="Privacy Policy"
            className="underline underline-offset-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Privacy Policy
          </a>
          <span className="mx-3 text-slate-600 dark:text-slate-400">|</span>
          <a
            href="https://www.centxo.com/terms"
            title="Terms of Service"
            className="underline underline-offset-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Terms of Service
          </a>
        </p>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
          <a href="https://www.centxo.com/privacy" className="underline text-blue-600 dark:text-blue-400 break-all">
            https://www.centxo.com/privacy
          </a>
          {" · "}
          <a href="https://www.centxo.com/terms" className="underline text-blue-600 dark:text-blue-400 break-all">
            https://www.centxo.com/terms
          </a>
        </p>
      </div>
    </div>
  );
}
