import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  images: {
    dangerouslyAllowSVG: true
  }
};

export default withFlowbiteReact(nextConfig);
