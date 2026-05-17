// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tools.example.com', // 部署後請換成實際網域
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
