// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thatosmk.github.io/',
  base: 'thatosmk',
  integrations: [mdx(), sitemap(), tailwindcss()],
  vite: {
    plugins: [],
  },
});