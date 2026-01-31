export const metadata = {
  title: "Privacy Policy - Centxo",
  description:
    "Centxo collects user email and name via Google OAuth solely for authentication and account creation. We do not share your data with third parties.",
};

/**
 * Privacy Policy page - publicly accessible, no login required.
 * Content as specified for Google OAuth verification.
 */
export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Privacy Policy
      </h1>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Privacy Policy: Centxo collects user email and name via Google OAuth
          solely for authentication and account creation purposes. We do not
          share your data with third parties. For support, contact{" "}
          <a
            href="mailto:nprxth@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
          >
            nprxth@gmail.com
          </a>
          .
        </p>

        <p className="text-sm text-muted-foreground">
          <a href="/" className="text-blue-600 dark:text-blue-400 underline">
            ← Back to Home
          </a>
          {" · "}
          <a href="/terms" className="text-blue-600 dark:text-blue-400 underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
