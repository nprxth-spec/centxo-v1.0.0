"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function DataDeletionContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">
          {t("legal.deletion.fb.title")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t("legal.deletion.fb.desc")}
        </p>

        <div className="bg-muted/50 dark:bg-muted/20 border border-foreground/5 dark:border-white/10 rounded-2xl p-6 space-y-4">
          <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.step1").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.step2").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.step3").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.step4").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li>{t("legal.deletion.step5")}</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">
          {t("legal.deletion.google.title")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t("legal.deletion.google.desc")}
        </p>

        <div className="bg-muted/50 dark:bg-muted/20 border border-foreground/5 dark:border-white/10 rounded-2xl p-6 space-y-4">
          <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.google.step1").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.google.step2").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.google.step3").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            <li dangerouslySetInnerHTML={{ __html: t("legal.deletion.google.step4").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">
          {t("legal.deletion.contact.title")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {t("legal.deletion.contact.desc")}
        </p>
        <div className="bg-muted/50 dark:bg-muted/20 border border-foreground/5 dark:border-white/10 p-6 rounded-2xl">
          <ul className="list-none space-y-1">
            <li className="font-medium">Centxo Digital Solution · Narongsak Srikracha</li>
            <li className="font-medium">
              Email:{" "}
              <a href="mailto:nprxth@gmail.com" className="text-amber-600 dark:text-amber-400 hover:underline">
                nprxth@gmail.com
              </a>
            </li>
            <li className="font-medium">
              Tel:{" "}
              <a href="tel:+66803787247" className="text-amber-600 dark:text-amber-400 hover:underline">
                +66 80 378 7247
              </a>
            </li>
            <li className="font-medium">Subject: Data Deletion Request</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
