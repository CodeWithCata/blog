// File: src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies these rules to ALL search engine bots
      allow: '/',     // Allows them to crawl your entire site
      disallow: [
        '/api/',      // Blocks bots from crawling internal API endpoints
        '/private/',  // Blocks bots from any private folders you might make later
      ],
    },
    // Tells Google exactly where to find your dynamic sitemap file
    sitemap: 'https://cwc-blog-two.vercel.app/sitemap.xml',
  };
}