import { createRouter, createWebHistory } from 'vue-router'
import Palettes from './App.vue'  // or Palettes.vue if you have it
import Contact from './components/Contact.vue'
import Info from './components/Info.vue'

const routes = [
  { path: '/', redirect: '/palettes' },  // redirect root to palettes
  { path: '/palettes', component: Palettes },
  { path: '/contact', component: Contact },
  { path: '/info', component: Info }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

