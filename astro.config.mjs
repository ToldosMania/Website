import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), solidJs(
    {
      include: ['**/solid/*'],
    }
  )],
  site: "https://toldosmania.github.io",
  base: "/Website"
});