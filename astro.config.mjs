// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Use environment variable with fallback to production URL
const appUrl = process.env.PUBLIC_APP_URL || 'https://app.codescribeai.com';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  // Redirect common app routes to subdomain
  redirects: {
    '/signup': `${appUrl}/signup`,
    '/login': `${appUrl}/login`,
    '/app': appUrl,
  }
});