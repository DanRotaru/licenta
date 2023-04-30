import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'fs'
import { resolve } from 'path'
// import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    // https: {
    //   key: readFileSync(resolve(__dirname, './src/assets/key.pem')),
    //   cert: readFileSync(resolve(__dirname, './src/assets/cert.pem')),
    // }
  },
  // plugins: [vue(), mkcert()],
  plugins: [vue()],
  root: './src',
  publicDir: resolve(__dirname, './public'),
  css: {devSourcemap: true},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
