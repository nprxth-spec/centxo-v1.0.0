import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Centxo",
  description: "Terms of Service for Centxo - Facebook and Meta ads management platform.",
};

/**
 * Terms of Service page - publicly accessible, no login required.
 * Basic terms for Google OAuth verification.
 */
export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Terms of Service
      </h1>

      <div className="space-y-6 prose prose-slate dark:prose-invert max-w-none">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-foreground">
            1. Agreement
          </h2>
          <p className="text-foreground leading-relaxed">
            By accessing or using Centxo (&quot;Service&quot;), you agree to be
            bound by these Terms of Service. If you disagree with any part of the
            terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-foreground">
            2. Service Description
          </h2>
          <p className="text-foreground leading-relaxed mb-2">
            Centxo provides Facebook and Meta ads management tools, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-foreground">
            <li>Campaign creation and management</li>
            <li>Multi-account ad management</li>
            <li>Google Sheets export</li>
            <li>AI-powered optimization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-foreground">
            3. Account & Authentication
          </h2>
          <p className="text-foreground leading-relaxed">
            You may sign in with Google or Facebook. We use your email and name
            solely for authentication and account creation. You are responsible
            for maintaining the security of your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-foreground">
            4. Contact
          </h2>
          <p className="text-foreground leading-relaxed">
            For support, contact{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              nprxth@gmail.com
            </a>
            . Address: Bangkok, Thailand.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-4">
          <a href="/" className="text-blue-600 dark:text-blue-400 underline">
            ← Back to Home
          </a>
          {" · "}
          <a href="/privacy" className="text-blue-600 dark:text-blue-400 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
