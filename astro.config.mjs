import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tiwa-n-tiwa.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
