import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from '@astrojs/preact'

export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap()],
  site: 'https://pedrokehl.net/'
});