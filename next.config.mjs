// @ts-check
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "rsms.me",
      "www.fontshare.com",
      "phosphoricons.com",
      "heroicons.com",
    ],
  },
};

export default withContentlayer(nextConfig);
