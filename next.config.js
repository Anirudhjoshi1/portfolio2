/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,  // Make the API key available in the app
  },
};

module.exports = nextConfig;
