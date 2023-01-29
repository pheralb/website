import { defineConfig } from "astro/config";

// Astro integrations:
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
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
  site: "https://www.pheralb.dev/",
});
