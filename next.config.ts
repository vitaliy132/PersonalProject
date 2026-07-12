import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/work/the-copper-pan",
        destination: "/work/brick-salt",
        permanent: true,
      },
      {
        source: "/work/the-copper-pan/:path*",
        destination: "/work/brick-salt/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
