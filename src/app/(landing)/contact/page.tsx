import { LegalPageLayout } from "@/components/legal-page-layout";

export const metadata = {
  title: "Contact - Centxo Digital Solution",
  description: "Contact Centxo Digital Solution. Narongsak Srikracha. Facebook/Meta ads management platform.",
};

export default function ContactPage() {
  return (
    <LegalPageLayout title="Contact" subtitle="Centxo Digital Solution · Narongsak Srikracha">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-6">Get in touch</h2>
        <ul className="space-y-4 text-foreground">
          <li>
            <strong className="text-muted-foreground">Legal entity:</strong> Narongsak Srikracha
          </li>
          <li>
            <strong className="text-muted-foreground">Email:</strong>{" "}
            <a href="mailto:nprxth@gmail.com" className="text-amber-600 dark:text-amber-400 hover:underline">
              nprxth@gmail.com
            </a>
          </li>
          <li>
            <strong className="text-muted-foreground">Tel:</strong>{" "}
            <a href="tel:+66803787247" className="text-amber-600 dark:text-amber-400 hover:underline">
              +66 80 378 7247
            </a>
          </li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}
