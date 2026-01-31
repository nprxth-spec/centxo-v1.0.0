import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Centxo",
  description:
    "Centxo Privacy Policy. Learn what data we collect from Google (email, name), how we use it, and how we protect your information.",
};

/**
 * Privacy Policy page - plain English for Google OAuth verification.
 * Publicly accessible, no authentication required.
 */
export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Privacy Policy
      </h1>

      <div className="space-y-8 prose prose-stone dark:prose-invert max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            1. Introduction – Who We Are
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Centxo (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
            platform for Facebook and Meta ads management. We help users manage
            multiple ad accounts, create and optimize campaigns, and scale their
            advertising business. We respect your privacy and are committed to
            protecting your personal data.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
            We use Google OAuth to authenticate users. We do not share personal
            data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            2. Data We Collect from Google
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you sign in with Google, we collect the following data from
            your Google account:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Email address</strong> – to create your account and
              communicate with you
            </li>
            <li>
              <strong>Name</strong> – to personalize your experience and
              identify your account
            </li>
            <li>
              <strong>Profile picture</strong> – to display in your account
              (optional)
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We use Google Sign-In solely for authentication. Our use of
            information received from Google APIs adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            3. How We Use Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the data we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Create and manage your account</strong> – to authenticate
              you and provide access to our services
            </li>
            <li>
              <strong>Personalize your experience</strong> – to tailor the
              platform to your needs
            </li>
            <li>
              <strong>Provide our ad management services</strong> – to help you
              manage Facebook/Meta ad campaigns
            </li>
            <li>
              <strong>Communicate with you</strong> – to send important updates
              and support
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            4. How We Store and Protect Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed. We store your data on
            secure, encrypted servers and do not sell your data to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            5. Contact Us
          </h2>
          <div className="bg-muted p-6 rounded-lg">
            <p className="text-muted-foreground mb-2">
              If you have any questions about this Privacy Policy or your
              personal data, please contact us:
            </p>
            <ul className="list-none space-y-1">
              <li className="font-medium">
                Support:{" "}
                <a
                  href="mailto:nprxth@gmail.com"
                  className="text-primary underline hover:no-underline"
                >
                  nprxth@gmail.com
                </a>
              </li>
              <li className="font-medium">
                Privacy:{" "}
                <a
                  href="mailto:privacy@centxo.com"
                  className="text-primary underline hover:no-underline"
                >
                  privacy@centxo.com
                </a>
              </li>
              <li className="font-medium">Address: Bangkok, Thailand</li>
            </ul>
          </div>
        </section>

        <p className="text-sm text-muted-foreground pt-4">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
          {" · "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}
