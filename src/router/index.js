import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/service', component: () => import('@/views/ServiceView.vue') },
  { path: '/news', component: () => import('@/views/NewsView.vue') },
  { path: '/news/news-detail', component: () => import('@/views/NewsDetailView.vue') }, 
  { path: '/contact', component: () => import('@/views/ContactView.vue') },
  { path: '/contact/contact-confirm', component: () => import('@/views/ContactConfirmView.vue') },
  { path: '/contact/contact-thanks', component: () => import('@/views/ContactThanksView.vue') }
]

export function createMyRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
  })
}