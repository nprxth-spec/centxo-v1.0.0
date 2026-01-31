import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://centxo.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/dashboard/', '/settings/', '/launch/', '/ads-manager/', '/accounts/', '/campaigns/', '/google-sheets-export/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
