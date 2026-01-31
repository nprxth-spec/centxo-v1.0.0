import { LandingHeroSection } from "@/components/landing-hero-section";
import { LandingAboutSection } from "@/components/landing-about-section";
import { LandingPurposeSection } from "@/components/landing-purpose-section";
import { LandingPageClient } from "@/components/landing-page-client";

const PRIVACY_URL = "https://www.centxo.com/privacy";

export async function generateMetadata() {
  return {
    title: "Centxo - Facebook/Meta Ads Management Platform | Privacy Policy: www.centxo.com/privacy",
    description:
      "Centxo is a platform for Facebook and Meta ads management. Purpose: Help businesses manage multiple ad accounts, optimize campaigns, and scale advertising. We use Google OAuth for secure authentication. Privacy Policy: https://www.centxo.com/privacy | Terms: https://www.centxo.com/terms",
    openGraph: {
      title: "Centxo - Facebook/Meta Ads Management | Privacy: www.centxo.com/privacy",
      description:
        "Facebook and Meta advertising management platform. Privacy Policy: https://www.centxo.com/privacy",
    },
    other: {
      'privacy-policy': PRIVACY_URL,
      'terms-of-service': 'https://www.centxo.com/terms',
    },
  };
}

// Search "Centxo-Deploy-v2025-01-31" in page source to verify production has latest code
export default async function LandingPage() {
  return (
    <div className="relative overflow-hidden min-h-screen" data-deploy-version="Centxo-Deploy-v2026-02-01">
      {/* NOSCRIPT: Critical content for crawlers without JavaScript */}
      <noscript>
        <div style={{
          padding: '2rem',
          margin: '2rem auto',
          maxWidth: '800px',
          backgroundColor: '#fff3cd',
          border: '3px solid #ffc107',
          borderRadius: '8px'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Centxo: Facebook and Meta Ads Management Platform</h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Purpose of this Application</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Centxo is a professional platform for managing Facebook and Meta advertising campaigns. 
            We help businesses manage multiple ad accounts, create and optimize campaigns, 
            track performance, and export data to Google Sheets.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            <strong>How we use Google data:</strong> When you sign in with Google, we collect your 
            email address and name solely for authentication and account management. We do not 
            share your data with third parties.
          </p>
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#fff', 
            border: '2px solid #0066cc',
            marginTop: '1.5rem'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              📋 Privacy Policy:
            </p>
            <a 
              href="https://www.centxo.com/privacy" 
              style={{ 
                fontSize: '1.1rem', 
                color: '#0066cc', 
                textDecoration: 'underline',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              https://www.centxo.com/privacy
            </a>
            <a 
              href="https://www.centxo.com/terms" 
              style={{ 
                fontSize: '1.1rem', 
                color: '#0066cc', 
                textDecoration: 'underline',
                display: 'block'
              }}
            >
              https://www.centxo.com/terms
            </a>
          </div>
        </div>
      </noscript>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-12 pb-32">
        {/* Server-rendered: Hero with app description (English, for Google OAuth verification) */}
        <LandingHeroSection />

        {/* Server-rendered: About Centxo + Key Features (how app uses Google data) */}
        <LandingAboutSection />

        {/* Server-rendered: Purpose section + Privacy/Terms links */}
        <LandingPurposeSection />

        {/* Client-rendered: CTA, Bento grid */}
        <LandingPageClient />
      </div>
    </div>
  );
}
