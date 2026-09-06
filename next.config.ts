import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/aos",
  assetPrefix: "/aos/",
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  devIndicators: false,
};

export default nextConfig;
