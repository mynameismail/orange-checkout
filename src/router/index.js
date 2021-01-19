import Vue from 'vue'
import VueRouter from 'vue-router'
import Delivery from '../views/Delivery.vue'
import Payment from '../views/Payment.vue'
import Thankyou from '../views/Thankyou.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/thankyou',
      name: 'Thankyou',
      component: Thankyou
    },
  ]
})

export default router
