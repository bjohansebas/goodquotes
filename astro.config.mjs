import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defaultLang, showDefaultLang } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: showDefaultLang,
    },
  },
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://goodquotes.vercel.app/",
});
