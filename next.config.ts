import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myadimage.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
