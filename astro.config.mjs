// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://thato.semoko.co.za/',
  integrations: [
    starlight({ title: 'Course'}),
    mdx(), sitemap(), tailwindcss(),
  ],
  vite: {
    plugins: [],
  },
});