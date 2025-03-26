import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import SearchView from '../views/Search.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/search/:type(attraction|restaurant|event)', component: SearchView },
  // 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
