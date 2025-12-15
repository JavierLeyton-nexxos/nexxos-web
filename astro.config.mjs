import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nexxos.ai', // Placeholder URL
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt-br'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  image: {
    domains: ['images.unsplash.com'],
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), partytown({
    config: {
      forward: ['dataLayer.push'],
    }
  })]
});