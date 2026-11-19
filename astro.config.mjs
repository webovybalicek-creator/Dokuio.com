import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dokuio.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
