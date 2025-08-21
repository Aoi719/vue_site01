import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全コンポーネントで変数・mixinを自動読み込み
        additionalData: `
          @use "@/assets/scss/settings/variables" as *;
          @use "@/assets/scss/settings/mixins" as *;
          @use "@/assets/scss/settings/functions" as *;
        `,
      },
    },
  },
})
