/** @type {import('vite').UserConfig} */
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
})
