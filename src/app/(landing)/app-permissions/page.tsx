import Link from "next/link";

export const metadata = {
  title: "App Permissions - Centxo",
  description:
    "Centxo App Permissions - Google and Meta/Facebook permissions for authentication and ad management.",
};

/**
 * App Permissions page - Google & Meta/Facebook permissions.
 * Required for Google OAuth and Meta App Review.
 */
export default function AppPermissionsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-center text-foreground">
        App Permissions
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Centxo · Google & Meta/Facebook
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
        {/* Google Permissions */}
        <section className="bg-card border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Google Permissions
          </h2>
          <p className="text-foreground mb-4">
            When you sign in with Google or use the Google Sheets export feature, our app may request:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>
              <strong>View, edit, create, and delete Google Sheets</strong> — To export ad performance data to spreadsheets you create or select
            </li>
            <li>
              <strong>View personal info (email, name, profile picture)</strong> — For authentication and account management
            </li>
            <li>
              <strong>Link you with your Google account</strong> — To enable Google-connected services
            </li>
          </ul>
          <p className="text-foreground mt-4">
            We comply with the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Google API Services User Data Policy
            </a>
            . You can revoke access at any time via{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Google Account settings
            </a>
            .
          </p>
        </section>

        {/* Meta/Facebook Permissions */}
        <section className="bg-card border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Meta / Facebook Permissions
          </h2>
          <p className="text-foreground mb-4">
            When you connect Facebook for ad management, our app requests:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>
              <strong>email, public_profile</strong> — For authentication and account identification
            </li>
            <li>
              <strong>ads_read</strong> — To read ad accounts, campaigns, and performance insights
            </li>
            <li>
              <strong>ads_management</strong> — To create and manage ad campaigns
            </li>
            <li>
              <strong>pages_show_list, pages_read_engagement</strong> — To display and use Facebook Pages for ads
            </li>
          </ul>
          <p className="text-foreground mt-4">
            We use this data solely for ad management within Centxo. We do not sell or share your data. You can remove the app from{" "}
            <a
              href="https://www.facebook.com/settings?tab=applications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Facebook Settings
            </a>
            {" "}or visit our{" "}
            <Link href="/data-deletion" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
              Data Deletion
            </Link>
            {" "}page.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-6 border-t">
          <Link href="/" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            ← Back to Home
          </Link>
          {" · "}
          <Link href="/privacy" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/data-deletion" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Data Deletion
          </Link>
        </p>
      </div>
    </div>
  );
}
