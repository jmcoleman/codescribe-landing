// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const appUrl = env.PUBLIC_APP_URL || 'https://app.codescribeai.com';

  return {
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
  };
});