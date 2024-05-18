import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

console.log(resolve(root, 'index.html'));
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
  root: "./src",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@public': resolve(__dirname, "./public"),
      '@assets': resolve(__dirname, "./src/assets")
    }
  }

})
