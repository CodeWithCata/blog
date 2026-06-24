// src/services/strapi.ts

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export async function fetchFromStrapi(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

// MAKE SURE "export" IS RIGHT HERE:
export async function fetchArticleBySlug(slug: string) {
  const endpoint = `articles?filters[slug][$eq]=${slug}&populate=*`;
  
  const response = await fetchFromStrapi(endpoint, {
    next: { revalidate: 60 },
  });
console.log("RAW STRAPI RESPONSE:", JSON.stringify(response, null, 2));
  return response.data.length > 0 ? response.data[0] : null;
}