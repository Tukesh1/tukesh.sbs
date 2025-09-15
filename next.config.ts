import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Common breakpoints (tailwind defaults + fine-tuned smaller size for thumbnails)
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 96, 128, 160, 256, 320],
    domains: ["images.credly.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
};

export default nextConfig;
