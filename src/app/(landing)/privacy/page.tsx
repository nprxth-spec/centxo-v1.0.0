export const metadata = {
  title: "Privacy Policy - Centxo",
  description:
    "Centxo uses Google OAuth to securely log you in. We only collect your name and email to manage your account and do not share your data with anyone.",
};

/**
 * Privacy Policy page - publicly accessible, no login required.
 * Simple, clear content for Google OAuth verification.
 */
export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Privacy Policy
      </h1>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-8 mb-6">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            <strong>Privacy Policy:</strong> Centxo uses Google OAuth to securely log you in. 
            We only collect your name and email to manage your account and do not share your 
            data with anyone.
          </p>
          <p className="text-base text-foreground">
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline font-semibold"
            >
              nprxth@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Your email address (from Google Sign-In)</li>
            <li>Your full name (from Google Sign-In)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-6">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>To create and manage your Centxo account</li>
            <li>To authenticate your identity when you log in</li>
            <li>To provide personalized features within the application</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-6">Data Sharing</h2>
          <p className="text-foreground leading-relaxed">
            We do not share, sell, or transfer your personal data to third parties. 
            Your information is used solely for the purposes of managing your Centxo account.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6">Contact Us</h2>
          <p className="text-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:nprxth@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              nprxth@gmail.com
            </a>
          </p>
        </div>

        <p className="text-sm text-muted-foreground pt-8 border-t mt-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            ← Back to Home
          </a>
          {" · "}
          <a href="/terms" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
