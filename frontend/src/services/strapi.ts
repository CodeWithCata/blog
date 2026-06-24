// src/services/strapi.ts
import { StrapiResponse, Article } from '@/types/strapi';

// Senior Note: Keep the base URL server-side only if possible. 
// If client components need to fetch, use Next.js Route Handlers as a proxy.
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN; // Add this to your .env

export async function fetchFromStrapi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
    // Ensure we don't accidentally double-slash or misformat the endpoint
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const url = `${STRAPI_URL}/api/${cleanEndpoint}`;

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Inject the Bearer token securely if it exists on the environment
    if (STRAPI_TOKEN) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Strapi HTTP Error: ${response.status} ${response.statusText}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.error(`[Strapi Service Error] Failed fetching: ${endpoint}`, error);
    throw error;
  }
}

// Yes, "export" is absolutely correct here so it can be imported in app/[slug]/page.tsx
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  // OPTIMIZED: Always sanitize and encode dynamic URI components to prevent broken requests
  const sanitizedSlug = encodeURIComponent(slug);
  const endpoint = `articles?filters[slug][$eq]=${sanitizedSlug}&populate=*`;
  
  try {
    // Typed fetch explicitly avoids 'any' mapping bugs
    const response = await fetchFromStrapi<StrapiResponse<Article[]>>(endpoint, {
      next: { revalidate: 60 },
    });

    // OPTIMIZED: Defensive programming chain checking protects against runtime crashes
    if (response && response.data && response.data.length > 0) {
      return response.data[0];
    }
    
    return null;
  } catch (error) {
    console.error(`Failed to resolve article details for slug: ${slug}`, error);
    return null; // Return null gracefully so your UI can display a clean 404 page instead of crashing
  }
}