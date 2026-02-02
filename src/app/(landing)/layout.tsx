import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LandingFooter } from "@/components/landing-footer";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://centxo.online";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-12 sm:h-14 items-center px-4 sm:px-6">
          <Logo />
          <nav className="ml-auto flex items-center gap-3 sm:gap-5">
            <a href={`${BASE_URL}/privacy`} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href={`${BASE_URL}/terms`} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <Link href="/app-permissions" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">App Permissions</Link>
            <Link href="/login">
              <Button size="sm" className="rounded-lg px-5 h-9 text-sm">Get Started</Button>
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
