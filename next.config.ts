import type { NextConfig } from "next";

// Enable experimental app directory and images for Next.js 15+
const nextConfig: NextConfig = {
  experimental: {
    // add other experimental options here if needed
  },
  images: {
    domains: [], // add domains if using external images
  },
};

export default nextConfig;
