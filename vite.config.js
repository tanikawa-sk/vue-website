import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  ssgOptions: {
    includedRoutes(paths) {
      return [
        '/',
        '/service',
        '/news',
        '/news/news-detail'
      ]
    },
    crawler: false,
  },
})
