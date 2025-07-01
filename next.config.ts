import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio' : '',
  images: {
    dangerouslyAllowSVG: true
  }
};

export default withFlowbiteReact(nextConfig);
