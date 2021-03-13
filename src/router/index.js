import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    window.scrollTo(0,0)
  }
})

export default router
