import { defineConfig } from "astro/config";

// Astro integrations:
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// MDX plugins:
import remarkGfm from "remark-gfm";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

export default defineConfig({
  site: "https://www.pheralb.dev/",
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx({
      rehypePlugins: [],
      remarkPlugins: [remarkGfm, remarkReadingTime],
      extendDefaultPlugins: true,
      shikiConfig: {
        theme: "vitesse-dark",
      },
    }),
    sitemap(),
  ],
});
