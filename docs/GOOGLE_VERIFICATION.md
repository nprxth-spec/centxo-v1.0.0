# Google App Verification - centxo.com

## ⚠️ CRITICAL: URL Must Match OAuth Console Exactly

Google requires the **Privacy Policy link href to match EXACTLY** the URL you entered in the OAuth consent screen. Use **absolute URLs** (e.g. `https://centxo.com/privacy`).

**Production env vars** (set in Vercel/hosting):
```
NEXT_PUBLIC_APP_URL=https://centxo.com
# OR
NEXTAUTH_URL=https://centxo.com
```

Use `https://centxo.com` (no trailing slash) if your OAuth Console has:
- Homepage: `https://centxo.com`
- Privacy Policy: `https://centxo.com/privacy`

If you use `www`, set `https://www.centxo.com` instead.

## 1. Purpose of App ✅
The homepage includes an "About Centxo" section describing the app's functionality (Facebook/Meta ads management).

## 2. Privacy Policy Link ✅
- **Top bar**: Privacy Policy | Terms of Service (first visible content)
- **Purpose section**: Dedicated block + inline "Read our Privacy Policy and Terms of Service"
- **Header**: Privacy Policy, Terms of Service
- **Footer**: Privacy Policy, Terms, Data Deletion
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
