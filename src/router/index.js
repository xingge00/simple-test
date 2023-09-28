import { createRouter, createWebHistory } from 'vue-router'

import { initRouter } from '@/modules/index.js'

export default createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: initRouter,
})
