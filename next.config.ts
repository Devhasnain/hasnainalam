import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  // async redirects() {
  //   return [
  //     {
  //       source: '/blog',
  //       destination: '/blog/page/1',
  //       permanent: true,
  //     },
  //   ];
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-cms.huefinds.store',
        port: '',
        pathname: '/wp-content/uploads/**/**',
      },
    ],
  },
};

export default nextConfig;
