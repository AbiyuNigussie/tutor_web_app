import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/sign-in", destination: "/handler/sign-in" },
      { source: "/sign-up", destination: "/handler/sign-up" },
      { source: "/sign-out", destination: "/handler/sign-out" },
    ];
  },
};

export default nextConfig;
