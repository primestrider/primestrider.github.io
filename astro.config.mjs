// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Static site on GitHub Pages; drives canonical, og:url, absolute image URLs and the sitemap
  site: 'https://primestrider.github.io',
  integrations: [react(), sitemap()],
  build: {
    // One page with a small stylesheet: inline it so no CSS request blocks the first paint
    inlineStylesheets: 'always',
  },
});
