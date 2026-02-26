// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Use environment variable with fallback to production URL
const appUrl = process.env.PUBLIC_APP_URL || 'https://app.codescribeai.com';

// https://astro.build/config
export default defineConfig({
  site: 'https://codescribeai.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()],

  // Redirect common app routes to subdomain
  redirects: {
    '/signup': `${appUrl}/signup`,
    '/login': `${appUrl}/login`,
    '/app': appUrl,
  }
});