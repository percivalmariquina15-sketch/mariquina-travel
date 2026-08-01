import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [80],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
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
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400, stale-while-revalidate=31536000",
        },
      ],
    },
    {
      source: "/vehicles/:slug",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400, stale-while-revalidate=31536000",
        },
      ],
    },
  ],
};

export default nextConfig;
