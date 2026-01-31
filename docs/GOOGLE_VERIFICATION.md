# Google App Verification - centxo.com

## 1. Purpose of App ✅
The homepage now includes an explicit "About Centxo - Application Purpose" section at the top explaining that Centxo is a Facebook/Meta ads management platform.

## 2. Privacy Policy Link ✅
- **Header**: Privacy Policy and Terms of Service links in the top navigation bar
- **Hero section**: "By using this app you agree to our Privacy Policy and Terms of Service" with inline links
- **Footer**: Privacy Policy, Terms, Data Deletion links

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
