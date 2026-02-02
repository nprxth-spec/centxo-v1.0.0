"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function DataDeletionPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {t('legal.deletion.title')}
            </h1>
            <p className="text-center text-muted-foreground mb-6">
                Centxo · Narongsak Srikracha
            </p>


            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">{t('legal.deletion.fb.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {t('legal.deletion.fb.desc')}
                    </p>

                    <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
                        <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.step1').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.step2').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.step3').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.step4').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li>{t('legal.deletion.step5')}</li>
                        </ol>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">{t('legal.deletion.google.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {t('legal.deletion.google.desc')}
                    </p>

                    <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
                        <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.google.step1').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.google.step2').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.google.step3').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('legal.deletion.google.step4').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </ol>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">{t('legal.deletion.contact.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {t('legal.deletion.contact.desc')}
                    </p>
                    <div className="bg-muted p-6 rounded-lg">
                        <ul className="list-none space-y-1">
                            <li className="font-medium">Centxo · Narongsak Srikracha</li>
                            <li className="font-medium">Email: <a href="mailto:nprxth@gmail.com" className="text-primary hover:underline">nprxth@gmail.com</a></li>
                            <li className="font-medium">Tel: <a href="tel:+66803787247" className="text-primary hover:underline">+66 80 378 7247</a></li>
                            <li className="font-medium">Subject: Data Deletion Request</li>
                        </ul>
                    </div>
                </section>
            </div>

            <p className="text-sm text-muted-foreground pt-8 border-t mt-8">
                <a href="/" className="text-primary hover:underline">← Back to Home</a>
                {" · "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                {" · "}
                <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                {" · "}
                <a href="/app-permissions" className="text-primary hover:underline">App Permissions</a>
            </p>
        </div>
    );
}
