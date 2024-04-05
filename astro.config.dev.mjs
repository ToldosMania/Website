import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind(), solidJs({
    include: ['**/solid/*']
  }), sitemap(), prefetch(), robotsTxt({
      sitemap: [
        'https://toldosmania.com.br/sitemap-index.xml',
      ],
    })],
  site: "http://localhost:4321",
});
