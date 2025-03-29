import HomeView from '@/views/Home.vue'

import InfoView from '@/views/Info.vue'
import SearchView from '@/views/Search.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/search/:type(attraction|restaurant|event)',
    name: 'Search',
    component: SearchView,
  },
  {
    path: '/info/:id',
    name: 'Info',
    component: InfoView,
  },
  // 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
