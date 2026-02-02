import Link from "next/link";

/**
 * Shared nav for legal pages (Privacy, Terms, App Permissions, Contact, Data Deletion).
 */
export function LegalPageNav() {
  return (
    <nav className="text-sm text-muted-foreground pt-8 border-t border-foreground/10 mt-8 flex flex-wrap justify-center gap-x-2 gap-y-1" aria-label="Legal pages">
      <Link href="/" className="text-amber-600 dark:text-amber-400 hover:underline">
        ← Back to Home
      </Link>
      <span>·</span>
      <Link href="/privacy" className="text-amber-600 dark:text-amber-400 hover:underline">
        Privacy Policy
      </Link>
      <span>·</span>
      <Link href="/terms" className="text-amber-600 dark:text-amber-400 hover:underline">
        Terms
      </Link>
      <span>·</span>
      <Link href="/app-permissions" className="text-amber-600 dark:text-amber-400 hover:underline">
        App Permissions
      </Link>
      <span>·</span>
      <Link href="/contact" className="text-amber-600 dark:text-amber-400 hover:underline">
        Contact
      </Link>
      <span>·</span>
      <Link href="/data-deletion" className="text-amber-600 dark:text-amber-400 hover:underline">
        Data Deletion
      </Link>
    </nav>
  );
}
