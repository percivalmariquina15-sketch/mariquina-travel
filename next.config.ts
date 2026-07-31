import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [80],
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/images/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/(favicon|icon|apple-icon).(ico|png)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
