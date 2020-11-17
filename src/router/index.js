import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PDF from '../views/PDF.vue'
import Properties from '../views/Properties.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties
  }
  ,
  {
    path: '/pdf',
    name: 'PDF',
    component: PDF
  }
]

const router = new VueRouter({
  routes
})

export default router
