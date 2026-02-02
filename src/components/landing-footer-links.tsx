import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://centxo.online";

/**
 * Footer links - Privacy Policy (absolute URL for Google OAuth), Terms, App Permissions.
 */
export function LandingFooterLinks() {
  return (
    <>
      <a href={`${BASE_URL}/privacy`} className="text-muted-foreground hover:text-foreground transition-colors">
        Privacy Policy
      </a>
      <a href={`${BASE_URL}/terms`} className="text-muted-foreground hover:text-foreground transition-colors">
        Terms
      </a>
      <Link href="/app-permissions" className="text-muted-foreground hover:text-foreground transition-colors">
        App Permissions
      </Link>
    </>
  );
}
