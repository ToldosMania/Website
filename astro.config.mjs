import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true,
        viewTransitions: true
    },
    integrations: [tailwind(), preact()],
    site: 'https://tulilirockz.github.io',
    base: '/toldosmania-web'
});