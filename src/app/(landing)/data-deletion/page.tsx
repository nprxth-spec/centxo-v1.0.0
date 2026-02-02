import { LegalPageLayout } from "@/components/legal-page-layout";
import { DataDeletionContent } from "@/components/data-deletion-content";

export const metadata = {
  title: "Data Deletion - Centxo Digital Solution",
  description:
    "Request data deletion from Centxo Digital Solution. Facebook/Meta and Google account removal instructions.",
};

export default function DataDeletionPage() {
  return (
    <LegalPageLayout title="Data Deletion" subtitle="Centxo Digital Solution · Narongsak Srikracha">
      <DataDeletionContent />
    </LegalPageLayout>
  );
}
