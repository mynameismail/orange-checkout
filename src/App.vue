<template>
  <div id="app">
    <div class="container">
      <div class="stepper">
        <div class="stepper__step step1 completed">
          <div class="number">1</div>
          <div class="text">Delivery</div>
        </div>
        <div class="stepper__arrow">
          <span class="material-icons">keyboard_arrow_right</span>
        </div>
        <div class="stepper__step step2" :class="{ 'completed': currentPage == 'payment' || currentPage == 'thankyou' }">
          <div class="number">2</div>
          <div class="text">Payment</div>
        </div>
        <div class="stepper__arrow">
          <span class="material-icons">keyboard_arrow_right</span>
        </div>
        <div class="stepper__step step3" :class="{ 'completed': currentPage == 'thankyou' }">
          <div class="number">3</div>
          <div class="text">Finish</div>
        </div>
      </div>
      <div class="back" v-if="backText" @click="backToPage()">
        <span class="back__icon material-icons">arrow_back</span>
        <span class="back__text">{{ backText }}</span>
      </div>
      <div class="content">
        <div class="content__left">
          <router-view/>
        </div>
        <div class="content__divider"></div>
        <div class="content__right">
          <div class="summary">
            <div class="summary__header">Summary</div>
            <div class="summary__purchased">10 items purchased</div>
            <div class="summary__item delivery-estimation" v-if="shipment">
              <div class="divider"></div>
              <div class="text">Delivery estimation</div>
              <div class="value">{{ shipmentType[shipment].when }} by {{ shipmentType[shipment].name }}</div>
            </div>
            <div class="summary__item payment-method" v-if="payment">
              <div class="divider"></div>
              <div class="text">Payment method</div>
              <div class="value">{{ paymentType[payment] }}</div>
            </div>
          </div>
          <div class="pricing">
            <div class="pricing__item">
              <span class="text">Cost of goods</span>
              <span class="value">{{ costOfGoods }}</span>
            </div>
            <div class="pricing__item" v-if="asDropshipper">
              <span class="text">Dropshipping Fee</span>
              <span class="value">{{ dropshipFee }}</span>
            </div>
            <div class="pricing__item" v-if="shipment">
              <span class="text">{{ shipmentType[shipment].name }} shipment</span>
              <span class="value">{{ shipmentType[shipment].price }}</span>
            </div>
            <div class="pricing__item total">
              <span class="text">Total</span>
              <span class="value">{{ total }}</span>
            </div>
            <button class="pricing__btn-continue" v-if="buttonText" @click="goToPage()">{{ buttonText }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      costOfGoods: 500000,
      dropshipFee: 5900,
      goFrom: {
        'delivery': {
          buttonText: 'Continue to Payment',
          validity: 'isValidDelivery',
          route: '/payment'
        },
        'payment': {
          buttonText: 'Pay',
          validity: 'isValidPayment',
          route: '/thankyou'
        },
        'thankyou': {
          buttonText: '',
          route: ''
        },
      },
      backFrom: {
        'delivery': {
          backText: 'Back to cart',
          route: ''
        },
        'payment': {
          backText: 'Back to delivery',
          route: '/'
        },
        'thankyou': {
          backText: '',
          route: '/'
        },
      }
    }
  },
  computed: {
    backText() {
      return this.backFrom[this.currentPage].backText
    },
    buttonText() {
      let text = this.goFrom[this.currentPage].buttonText
      if (this.currentPage == 'payment' && this.payment) {
        text += ' with ' + this.paymentType[this.payment]
      }
      return text
    },
    total() {
      let dropship = this.asDropshipper ? this.dropshipFee : 0
      let shipmentPrice = 0
      if (this.shipment) {
        shipmentPrice = this.shipmentType[this.shipment].price
      }
      return this.costOfGoods + dropship + shipmentPrice
    },
    ...mapState([
      'currentPage',
      'asDropshipper',
      'shipmentType',
      'paymentType',
      'shipment',
      'payment',
    ])
  },
  methods: {
    goToPage() {
      let validity = this.goFrom[this.currentPage].validity
      if (this.$store.getters[validity]) {
        let route = this.goFrom[this.currentPage].route
        this.$router.push(route)
      } else {
        console.log('Complete the required form')
      }
    },
    backToPage() {
      let route = this.backFrom[this.currentPage].route
      if (route != '') {
        this.$router.push(route)
      }
    }
  }
}
</script>
