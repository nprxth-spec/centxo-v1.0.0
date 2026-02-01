"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check, Activity, BrainCircuit, Command,
  ArrowRight, FileSpreadsheet, Users, Megaphone
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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function LandingPageClient() {
  const { t } = useLanguage();
  const scrollToFeatures = () => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center py-12 md:py-16">
        <motion.div {...fadeUp} className="space-y-5">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {t("landing.trial.badge", "14-day free trial · No credit card")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
            {t("landing.hero.title1")}{" "}
            <span className="text-primary">{t("landing.hero.title2")}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {t("landing.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-11 px-6 rounded-lg font-medium">
                {t("landing.cta.start")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-11 px-6 rounded-lg font-medium"
              onClick={scrollToFeatures}
            >
              {t("landing.cta.features")}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            {t("landing.features.title", "All Features Included")}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {t("landing.features.subtitle", "Everything you need—available in your 14-day free trial.")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, staggerChildren: 0.04 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.titleKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="p-5 rounded-xl border bg-card/50 hover:border-primary/20 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-muted/80">
                  <f.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">{t(f.titleKey)}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="py-16 text-center"
      >
        <div className="rounded-xl border bg-muted/20 py-10 px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              {t("landing.trial.benefit1", "All Features")}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              {t("landing.trial.benefit2", "No Credit Card")}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              {t("landing.trial.benefit3", "Cancel Anytime")}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            {t("landing.cta.final", "Ready to scale your ads?")}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
            {t("landing.cta.finalDesc", "Start your 14-day free trial today.")}
          </p>
          <Link href="/login">
            <Button size="lg" className="h-11 px-6 rounded-lg font-medium">
              {t("landing.cta.start")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
