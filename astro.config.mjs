import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(
    {
      include: ['**/solid/*'],
    }
  )],
  site: "https://tulilirockz.github.io",
  base: "/toldosmania-web"
});