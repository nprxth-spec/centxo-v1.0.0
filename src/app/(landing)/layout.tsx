import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LandingFooter } from "@/components/landing-footer";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-20 border-b border-foreground/5 dark:border-white/5 bg-background/80 dark:bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-14 sm:h-16 items-center px-4 sm:px-6">
          <Logo />
          <nav className="ml-auto flex items-center gap-3 sm:gap-5">
            <Link href="/login">
              <Button size="sm" className="rounded-xl px-6 h-10 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-md shadow-primary/20">Get Started</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}
