import { LegalPageLayout } from "@/components/legal-page-layout";

export const metadata = {
  title: "Privacy Policy - Centxo Digital Solution",
  description:
    "Centxo Digital Solution Privacy Policy. Contact: +66 80 378 7247, nprxth@gmail.com. We use Google OAuth and collect only your name and email for account management.",
};

/**
 * Privacy Policy page - publicly accessible, no login required.
 * Simple, clear content for Google OAuth verification.
 */
export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" subtitle="Centxo Digital Solution · Narongsak Srikracha">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-2xl p-6 mb-6">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            <strong>Privacy Policy:</strong> Centxo uses Google OAuth to securely log you in. 
            We collect your name and email for account management. When you use the Google Sheets export feature, we use the Google Sheets API to write ad performance data only to spreadsheets you create or select—we do not access other Google Drive files. We do not share your data with anyone.
          </p>
          <p className="text-base text-foreground mb-2">
            <strong>Legal entity:</strong> Narongsak Srikracha
          </p>
          <p className="text-base text-foreground mb-2">
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-amber-600 dark:text-amber-400 underline hover:no-underline font-semibold"
            >
              nprxth@gmail.com
            </a>
            {" · "}
            <a
              href="tel:+66803787247"
              className="text-amber-600 dark:text-amber-400 underline hover:no-underline font-semibold"
            >
              +66 80 378 7247
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Your email address and full name (from Google Sign-In for authentication)</li>
            <li>Google Sheets: We use the Google Sheets API to export ad performance data to spreadsheets you create or select (optional feature)</li>
            <li>Facebook/Meta data: Ad accounts, Pages, campaigns, and ad performance data (when you connect Facebook for ads management)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-6">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Google data: To create and manage your Centxo account and authenticate your identity</li>
            <li>Google Sheets API: To export your ad performance data to spreadsheets when you choose the Google Sheets export feature. We only write to spreadsheets you create or select—we do not access other Google Drive files. Our use of Google APIs complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 underline hover:no-underline">Google API Services User Data Policy</a>, including Limited Use requirements</li>
            <li>Facebook/Meta data: To manage your ad accounts, campaigns, and display performance insights within Centxo</li>
            <li>We do not share, sell, or transfer your data to third parties</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-6">Data Sharing</h2>
          <p className="text-foreground leading-relaxed">
            We do not share, sell, or transfer your personal data to third parties. 
            Your information is used solely for the purposes of managing your Centxo account and advertising operations.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6">Data Deletion</h2>
          <p className="text-foreground leading-relaxed mb-2">
            You may request deletion of your data at any time:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
            <li><strong>Facebook/Meta:</strong> Use Facebook&apos;s &quot;Remove&quot; option in your Facebook settings (Settings → Apps and Websites → Centxo → Remove), or visit our <a href="/data-deletion" className="text-amber-600 dark:text-amber-400 underline">Data Deletion</a> page for instructions.</li>
            <li><strong>Google:</strong> Revoke access in your Google Account settings, or contact us at{" "}
              <a href="mailto:nprxth@gmail.com" className="text-amber-600 dark:text-amber-400 underline hover:no-underline">nprxth@gmail.com</a>
              {" "}to request account deletion.</li>
          </ul>
          <p className="text-foreground leading-relaxed">
            We will process deletion requests promptly. For Facebook data deletion requests made through Meta&apos;s flow, we provide a confirmation code and status URL as required.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6">Contact Us</h2>
          <p className="text-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-amber-600 dark:text-amber-400 underline hover:no-underline"
            >
              nprxth@gmail.com
            </a>
            {" "}or{" "}
            <a
              href="tel:+66803787247"
              className="text-amber-600 dark:text-amber-400 underline hover:no-underline"
            >
              +66 80 378 7247
            </a>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
