import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
