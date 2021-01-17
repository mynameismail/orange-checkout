import Vue from 'vue'
import VueRouter from 'vue-router'
import Delivery from '../views/Delivery.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Delivery',
      component: Delivery
    },
  ]
})

export default router
