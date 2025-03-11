import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.ts',
  //       },
  //     }
  //   }
  // }
  env: {
    SHORTNER_URL: process.env.SHORTNER_URL
  }
};

export default nextConfig;
