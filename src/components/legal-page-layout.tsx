import { LegalPageNav } from "@/components/legal-page-nav";

/**
 * Shared layout wrapper for legal pages (Privacy, Terms, App Permissions, Contact, Data Deletion).
 * Provides luxury styling and consistent nav.
 */
export function LegalPageLayout({
  children,
  title,
  subtitle = "Centxo Digital Solution",
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative min-h-[60vh]">
      {/* Background - matches landing */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,hsl(var(--primary)/0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,hsl(var(--primary)/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto py-16 px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-foreground tracking-tight">
          {title}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          {subtitle}
        </p>

        <div className="rounded-3xl border border-foreground/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 sm:p-10 shadow-lg shadow-amber-500/5 dark:shadow-amber-400/5">
          {children}
        </div>

        <LegalPageNav />
      </div>
    </div>
  );
}
