# Centxo - Ads Management Platform

Centxo is a Facebook/Meta ads management platform with AI automation and Google Sheets export.

## Google Site Verification (for centxo.com ownership)

To verify ownership of https://centxo.com with Google:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property `https://centxo.com`
3. Choose **HTML tag** verification method
4. Copy the `content` value from the meta tag (e.g. `abc123xyz`)
5. Add to your `.env` or `.env.local`:
   ```
   GOOGLE_SITE_VERIFICATION=abc123xyz
   ```
6. Redeploy the site
