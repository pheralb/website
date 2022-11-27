/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "src",
  mdx: async () => {
    const [rehypePrismPlus] = await Promise.all([
      import("rehype-prism-plus").then((module) => module.default),
    ]);
    return {
      rehypePlugins: [rehypePrismPlus],
    };
  },
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
};
