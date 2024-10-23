import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@items': '/src',
      '@themes': '/src',
      '@computers': '/src/',
      '@computerrows': '/src/',
      '@games': '/src',
      '@index': '/src/',
      '@gameuis': '/src/',
      '@gameboards': '/src/'
    },
  },
});
