# Google App Verification - centxo.com

## ⚠️ CRITICAL: Use www.centxo.com (Google specifies this URL)

Google requires the **Privacy Policy link href to match EXACTLY** the URL you entered in the OAuth consent screen. Use **absolute URLs**.

**Production env vars** (set in Vercel/hosting):
```
NEXT_PUBLIC_APP_URL=https://www.centxo.com
NEXTAUTH_URL=https://www.centxo.com
```

**OAuth Console settings** (must match exactly):
- Homepage URL: `https://www.centxo.com`
- Privacy Policy URL: `https://www.centxo.com/privacy`

**WWW vs Non-WWW**: `vercel.json` redirects `centxo.com` → `www.centxo.com` so both show the same content.

## 1. Purpose of App ✅
The homepage includes an "About Centxo" section describing the app's functionality (Facebook/Meta ads management).

## 2. Privacy Policy Link ✅
- **Top bar**: Privacy Policy | Terms of Service (first visible content)
- **Header**: Privacy Policy, Terms of Service
- **Above-fold purpose bar**: Centxo description + Google data usage
- **Footer (bottom row)**: "Privacy Policy" | "Terms of Service" - last row at bottom of every page
- All links use absolute URLs matching OAuth Console

## 3. Verify Ownership of centxo.com

### Option A: HTML Meta Tag (Recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Enter `https://centxo.com` (or `https://www.centxo.com`)
4. Choose **HTML tag** verification method
5. Copy the `content` value from the meta tag, e.g.:
   ```html
   <meta name="google-site-verification" content="ABC123xyz..." />
   ```
   Copy only: `ABC123xyz...`

6. Add to your **production** environment variables (Vercel, hosting panel, etc.):
   ```
   GOOGLE_SITE_VERIFICATION=ABC123xyz...
   ```

7. **Redeploy** the site - the meta tag will be added to every page

### Option B: HTML File

1. In Google Search Console, choose **HTML file** verification
2. Download the file (e.g. `googleabc123def456.html`)
3. Place it in the `public/` folder of this project
4. Deploy - the file will be at `https://centxo.com/googleabc123def456.html`

### Important
- You must **redeploy** after adding the env variable
- The verification meta tag is only added when `GOOGLE_SITE_VERIFICATION` is set
- Ensure your production URL is `https://centxo.com` (not localhost)

## Troubleshooting: "Homepage is behind a login page"

If Google still reports this after deployment:

1. **Check hosting redirects**: Ensure your hosting (Vercel, Plesk, nginx, etc.) does NOT redirect `/` to `/login`. The root path must serve the landing page.

2. **Check www vs non-www**: If OAuth Console has `https://centxo.com`, ensure `https://centxo.com` (not www) serves the landing page. If you use www, set OAuth Console to `https://www.centxo.com`.

3. **Clear CDN cache**: If using Cloudflare or similar, purge cache for centxo.com so Google sees fresh content.

4. **Verify locally**: Visit https://www.centxo.com in incognito (logged out) - you should see:
   - Above-fold purpose text: "Centxo is a Facebook/Meta ads management tool..."
   - "Privacy Policy" and "Terms of Service" links in top bar, header, and footer (bottom row)
   - NOT a login form or blank page

## Pre-Submit Checklist

- [ ] Landing page: Clear description of what the app does (Facebook/Meta ads management)
- [ ] Footer: "Privacy Policy" and "Terms of Service" links visible at bottom
- [ ] Incognito test: Open https://www.centxo.com in incognito - see purpose + privacy links without login
- [ ] OAuth Console: Privacy Policy URL = `https://www.centxo.com/privacy`
