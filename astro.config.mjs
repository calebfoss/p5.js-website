import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      compat: true,
    }),
    mdx(),
    tailwind(),
    compress(),
  ],
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar", "es", "hi", "ko", "pt-br", "sk", "zh"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
