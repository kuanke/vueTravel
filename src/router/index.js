import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/index.vue'
import City from '@/pages/city/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
