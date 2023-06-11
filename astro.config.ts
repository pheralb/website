import { defineConfig } from "astro/config";

// Astro integrations:
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// MDX plugins:
import remarkGfm from "remark-gfm";

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
      remarkPlugins: [remarkGfm],
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true,
      },
      gfm: true,
    }),
    sitemap(),
  ],
});
