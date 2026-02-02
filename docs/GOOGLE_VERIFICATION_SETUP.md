# Google OAuth & Domain Verification Setup

## 1. Domain Ownership Verification (Google Search Console)

To fix "The website of your homepage URL is not registered to you":

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Enter `https://centxo.online` (or your domain)
4. Choose **HTML tag** verification method
5. Copy the `content` value from the meta tag, e.g.:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
6. Add to your environment variables:
   ```
   GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE
   ```
7. Rebuild and redeploy your app

The app already includes the verification meta tag when `GOOGLE_SITE_VERIFICATION` is set (see `src/app/layout.tsx`).

## 2. OAuth Consent Screen - App Name

Ensure your OAuth consent screen shows **Centxo Digital Solution** to match the homepage.

- Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → OAuth consent screen
- Set **App name** to: `Centxo Digital Solution`

## 3. Homepage Requirements (Already Implemented)

- ✅ **Privacy Policy link** — Visible in header ("Privacy Policy"), purpose section, and footer
- ✅ **Purpose of Application** — Clear "Purpose of this Application" section with description
- ✅ **App name** — "Centxo Digital Solution" shown in logo, purpose section, and footer
