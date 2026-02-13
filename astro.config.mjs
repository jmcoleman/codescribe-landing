// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  // Redirect common app routes to subdomain
  redirects: {
    '/signup': 'https://app.codescribeai.com/signup',
    '/login': 'https://app.codescribeai.com/login',
    '/app': 'https://app.codescribeai.com',
    '/legal/privacy': 'https://app.codescribeai.com/privacy',
    '/legal/terms': 'https://app.codescribeai.com/terms',
  }
});