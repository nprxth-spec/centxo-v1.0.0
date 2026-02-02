"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check, Activity, BrainCircuit, Command,
  ArrowRight, FileSpreadsheet, Users, Megaphone,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const FEATURES = [
  { icon: Users, titleKey: "landing.features.accounts.title", descKey: "landing.features.accounts.desc" },
  { icon: Megaphone, titleKey: "landing.features.campaigns.title", descKey: "landing.features.campaigns.desc" },
  { icon: Activity, titleKey: "landing.dashboard.title", descKey: "landing.dashboard.desc" },
  { icon: BrainCircuit, titleKey: "landing.ai.title", descKey: "landing.ai.desc" },
  { icon: FileSpreadsheet, titleKey: "landing.features.sheets.title", descKey: "landing.features.sheets.desc" },
  { icon: Command, titleKey: "landing.auto.title", descKey: "landing.auto.desc1" },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export function LandingPageClient() {
  const { t } = useLanguage();
  const scrollToFeatures = () => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero - Luxury */}
      <section className="relative text-center py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-primary/8 via-amber-500/5 to-primary/8 dark:from-primary/12 dark:via-amber-500/8 dark:to-primary/12 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-400/10 dark:bg-amber-400/15 rounded-full blur-[80px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-primary/15 rounded-full blur-[80px]" />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <motion.div
          {...fadeUp}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-amber-500/30 dark:border-amber-400/40 bg-gradient-to-r from-amber-500/10 to-primary/10 dark:from-amber-500/15 dark:to-primary/15 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-[0.25em] uppercase"
          >
            <Sparkles className="h-4 w-4" />
            {t("landing.trial.badge", "14-day free trial · No credit card")}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] max-w-4xl mx-auto">
            <span className="block">{t("landing.hero.title1")}</span>
            <span className="mt-2 block bg-gradient-to-r from-primary via-amber-600 to-amber-500 dark:from-primary dark:via-amber-400 dark:to-amber-300 bg-clip-text text-transparent">
              {t("landing.hero.title2")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            {t("landing.hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link href="/login" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-2xl font-semibold text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                {t("landing.cta.start")} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 rounded-2xl font-medium border-2 border-foreground/15 dark:border-white/15 hover:bg-foreground/5 dark:hover:bg-white/5 hover:border-foreground/25 transition-all duration-300"
              onClick={scrollToFeatures}
            >
              {t("landing.cta.features")}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features - Luxury cards */}
      <section id="features" className="py-24 lg:py-32 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.3em] mb-4">
            {t("landing.features.title", "All Features Included")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Everything you need to scale
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            {t("landing.features.subtitle", "Everything you need—available in your 14-day free trial.")}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-8 rounded-3xl border border-foreground/5 dark:border-white/5 bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:border-amber-500/20 dark:hover:border-amber-400/20 hover:shadow-2xl hover:shadow-amber-500/5 dark:hover:shadow-amber-400/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 to-transparent dark:from-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 to-primary/10 dark:from-amber-500/20 dark:to-primary/15 group-hover:from-amber-500/25 group-hover:to-primary/20 transition-colors duration-300 ring-1 ring-amber-500/10 dark:ring-amber-400/10">
                  <f.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{t(f.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA - Luxury */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 lg:py-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/20 dark:border-amber-400/25 bg-gradient-to-br from-white via-amber-500/5 to-primary/5 dark:from-white/5 dark:via-amber-500/10 dark:to-primary/10 p-12 sm:p-16 lg:p-20 shadow-2xl shadow-amber-500/5 dark:shadow-amber-400/5">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 dark:bg-amber-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 dark:bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.02)_100%)] rounded-[2rem]" />

          <div className="relative text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 dark:bg-amber-400/25 ring-2 ring-amber-500/30">
                  <Check className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </span>
                {t("landing.trial.benefit1", "All Features")}
              </span>
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 dark:bg-amber-400/25 ring-2 ring-amber-500/30">
                  <Check className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </span>
                {t("landing.trial.benefit2", "No Credit Card")}
              </span>
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 dark:bg-amber-400/25 ring-2 ring-amber-500/30">
                  <Check className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </span>
                {t("landing.trial.benefit3", "Cancel Anytime")}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {t("landing.cta.final", "Ready to scale your ads?")}
            </h3>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
              {t("landing.cta.finalDesc", "Start your 14-day free trial today.")}
            </p>

            <Link href="/login" className="inline-block group">
              <Button
                size="lg"
                className="h-14 px-12 rounded-2xl font-semibold text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                {t("landing.cta.start")} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline-block" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
