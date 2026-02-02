import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Back to Home">
      <img src="/centxo-logo.png" alt="Centxo Digital Solution" className="h-10 w-10 rounded-xl ring-1 ring-foreground/5 dark:ring-white/10" />
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Centxo</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">Digital Solution</span>
      </span>
    </Link>
  );
}
