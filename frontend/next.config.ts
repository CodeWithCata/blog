/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.strapiapp.com', // Whitelists your Strapi media CDN
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Whitelists your fallback placeholder images
      },
    ],
  },
};

export default nextConfig;