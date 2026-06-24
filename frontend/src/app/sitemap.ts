// File: src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cwc-blog-two.vercel.app";

  try {
    // Fetch your dynamic blog articles from Strapi
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`);
    const { data } = await res.json();

    const blogUrls = (data || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug || post.id}`,
      lastModified: new Date(post.updatedAt || new Date()),
    }));

    return [
      { url: baseUrl, lastModified: new Date() },
      ...blogUrls,
    ];
  } catch (error) {
    // Fallback if the Strapi API is down during sitemap generation
    return [{ url: baseUrl, lastModified: new Date() }];
  }
}