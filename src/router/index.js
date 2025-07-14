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
		{
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
		{
      path: '/contact/contact-confirm',
      name: 'contact-confirm',
      component: () => import('../views/ContactConfirmView.vue'),
    },
		{
      path: '/contact/contact-thanks',
      name: 'contact-thanks',
      component: () => import('../views/ContactThanksView.vue'),
    },
  ],
})

export default router
