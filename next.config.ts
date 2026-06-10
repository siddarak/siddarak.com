import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/personal/anotherproductivitytool",
        destination: "https://anotherproductivitytool.vercel.app/personal/anotherproductivitytool",
      },
      {
        source: "/personal/anotherproductivitytool/:path*",
        destination: "https://anotherproductivitytool.vercel.app/personal/anotherproductivitytool/:path*",
      },
    ];
  },
};

export default nextConfig;
