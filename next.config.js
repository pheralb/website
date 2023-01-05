// @ts-check
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["reapi.pheralb.workers.dev"],
  },
  async redirects() {
    return [
      {
        source: "/tw",
        destination: "https://twitter.com/pheralb_",
        permanent: true,
      },
      {
        source: "/tv",
        destination: "https://www.twitch.tv/pheralb",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/pheralb",
        permanent: true,
      },
      {
        source: "/reapi",
        destination: "https://reapi.pheralb.workers.dev/",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
