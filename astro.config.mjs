import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), tailwind(), sitemap()],
  site: 'https://ppkehl.netlify.app/'
});