import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["chitralnuts.pk", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/products", destination: "/shop", permanent: true },
    ];
  },
};

export default nextConfig;
