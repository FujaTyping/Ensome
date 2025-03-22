import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/Ensome",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
