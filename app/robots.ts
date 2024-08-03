import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL || 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/dashboard'],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}