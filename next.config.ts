import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // GSAP ScrollTrigger works smoothest in development with strict mode off or standard refs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

