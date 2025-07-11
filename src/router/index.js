import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
			path: '/news/news-detail',
			name: 'news-detail',
      component: () => import('../views/NewsDetailView.vue'),
    },
  ],
})

export default router
