<template>
  <div id="thankyou">
    <div class="header">
      <div class="header__text">Thank you</div>
      <div class="header__underline"></div>
    </div>
    <div class="order" v-if="orderId">Order ID : {{ orderId }}</div>
    <div class="delivery-text" v-if="shipment">Your order will be delivered {{ shipmentType[shipment].when }} with {{ shipmentType[shipment].name }}</div>
    <div class="gohome">
      <span class="gohome__icon material-icons">arrow_back</span>
      <span class="gohome__text" @click="goHomepage()">Go to homepage</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export default {
  name: 'Thankyou',
  data() {
    return {
      orderId: ''
    }
  },
  computed: {
    ...mapState([
      'shipmentType',
      'paymentType',
      'shipment',
      'payment',
    ])
  },
  methods: {
    generateOrderId() {
      let result = ''
      for (let i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
      }
      return result
    },
    syncFromStore() {
      this.orderId = this.$store.state.orderId
      if (!this.orderId) {
        this.orderId = this.generateOrderId()
        this.$store.commit('setOrderId', this.orderId)
      }
    },
    goHomepage() {
      this.$store.commit('resetAll')
      this.$router.push('/')
    },
  },
  mounted() {
    this.$store.commit('setCurrentPage', 'thankyou')
    this.syncFromStore()
    this.$store.commit('setPaymentErrors')
    if (this.$store.state['paymentErrors'].length > 0) {
      this.$router.push('/payment')
    }
  }
}
</script>
