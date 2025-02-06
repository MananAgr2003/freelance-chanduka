import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // WARNING: This option allows production builds to successfully complete even if
    // there are ESLint errors. Use with caution.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
