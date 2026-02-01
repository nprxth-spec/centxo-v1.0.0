import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Centxo",
  description: "Terms of Service for Centxo - Facebook and Meta ads management platform.",
};

/**
 * Terms of Service page - publicly accessible, no login required.
 * Simple, clear terms for Google OAuth verification.
 */
export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-center text-foreground">
        Terms of Service
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Centxo · Narongsak Srikracha
      </p>

      <div className="space-y-8 prose prose-slate dark:prose-invert max-w-none">
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700 rounded-lg p-8">
          <p className="text-lg text-foreground leading-relaxed mb-2">
            By using Centxo, you agree to these Terms of Service. We provide Facebook and Meta 
            advertising management tools. You are responsible for your account security and for 
            complying with Facebook's advertising policies.
          </p>
          <p className="text-base text-foreground">
            <strong>Legal entity:</strong> Narongsak Srikracha · <strong>Tel:</strong> <a href="tel:+66803787247" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">+66 80 378 7247</a>
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="text-foreground leading-relaxed">
            By accessing or using Centxo, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            2. Service Description
          </h2>
          <p className="text-foreground leading-relaxed mb-3">
            Centxo provides Facebook and Meta advertising management tools, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Multi-account management for Facebook ad accounts</li>
            <li>Campaign creation and optimization tools</li>
            <li>Performance tracking and analytics</li>
            <li>Google Sheets export functionality</li>
            <li>AI-powered optimization recommendations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            3. User Accounts
          </h2>
          <p className="text-foreground leading-relaxed">
            You may sign in using Google OAuth or Facebook Login. We collect your email 
            address and name solely for authentication and account management. You are 
            responsible for maintaining the security of your account credentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            4. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>You must comply with all Facebook and Meta advertising policies</li>
            <li>You are responsible for the content of your advertisements</li>
            <li>You must not use the service for illegal or unauthorized purposes</li>
            <li>You must keep your account information secure and confidential</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            5. Privacy
          </h2>
          <p className="text-foreground leading-relaxed">
            Your privacy is important to us. Please review our{" "}
            <a href="https://www.centxo.com/privacy" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
              Privacy Policy
            </a>{" "}
            to understand how we collect and use your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            6. Limitation of Liability
          </h2>
          <p className="text-foreground leading-relaxed">
            Centxo is provided "as is" without warranties of any kind. We are not responsible 
            for any losses or damages resulting from your use of the service, including but not 
            limited to advertising costs, lost revenue, or account suspensions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            7. Changes to Terms
          </h2>
          <p className="text-foreground leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of the 
            service after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            8. Contact Information
          </h2>
          <p className="text-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline font-semibold"
            >
              nprxth@gmail.com
            </a>
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-8 border-t mt-8">
          <a href="https://www.centxo.com" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            ← Back to Home
          </a>
          {" · "}
          <a href="https://www.centxo.com/privacy" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Privacy Policy
          </a>
          {" · "}
          <a href="https://www.centxo.com/data-deletion" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Data Deletion
          </a>
        </p>
      </div>
    </div>
  );
}
