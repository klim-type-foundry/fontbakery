import {fileURLToPath, URL} from 'node:url'

import {defineConfig, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {viteSingleFile} from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
const config: UserConfigExport = defineConfig({
  plugins: [vue(), vueJsx(), viteSingleFile()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  ssr: {
    noExternal: true,
  },
  build: {
    rollupOptions: {
      // input: 'spa-report.html',
      // output: {
      //   'index.html': 'spa-report.html',
      // }
    }
  }
})

export default config;
