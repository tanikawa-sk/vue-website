import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import App from './App.vue'
import { routes } from './router' 

export const createApp = ViteSSG(
  App,
  {
    routes,
    includedRoutes: () => [
      '/', '/service', '/news', '/news/news-details'
    ]
  },
  ({ app }) => {
    app.use(createPinia())
    app.use(createHead()) 
  }
)