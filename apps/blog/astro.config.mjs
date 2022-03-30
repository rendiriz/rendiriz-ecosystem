import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  devOptions: {
    port: 14000,
  },
  integrations: [react()],
});
