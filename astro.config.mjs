import { defineConfig } from "astro/config";

// Astro integrations:
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

// MDX plugins:
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx({
      rehypePlugins: [rehypePrism],
      remarkPlugins: [remarkGfm],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
