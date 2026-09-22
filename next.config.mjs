/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Unsplash CDN — required if you switch <img> to next/image
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};
export default nextConfig;
