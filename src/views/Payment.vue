<template>
  <div id="payment">
    <div class="header">
      <div class="header__text">Shipment</div>
      <div class="header__underline"></div>
    </div>
    <div class="shipment">
      <div class="choice-group">
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-gosend" name="shipment" value="gosend" v-model="shipment">
          <label class="choice__label" for="radio-gosend">
            <p>
              <span class="text">GO-SEND</span><br>
              <span class="detail">15,000</span>
            </p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-jne" name="shipment" value="jne" v-model="shipment">
          <label class="choice__label" for="radio-jne">
            <p>
              <span class="text">JNE</span><br>
              <span class="detail">9,000</span>
            </p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-personal" name="shipment" value="personal" v-model="shipment">
          <label class="choice__label" for="radio-personal">
            <p>
              <span class="text">Personal Courier</span><br>
              <span class="detail">29,000</span>
            </p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
      </div>
      <span
        class="msg--error"
        v-if="errors.includes('shipment')"
      >* Required</span>
    </div>
    <div class="header">
      <div class="header__text">Payment</div>
      <div class="header__underline"></div>
    </div>
    <div class="payment">
      <div class="choice-group">
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-ewallet" name="payment" value="ewallet" v-model="payment">
          <label class="choice__label" for="radio-ewallet">
            <p>
              <span class="text">e-Wallet</span><br>
              <span class="detail">1,500,000 left</span>
            </p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-bank" name="payment" value="bank" v-model="payment">
          <label class="choice__label" for="radio-bank">
            <p>Bank Transfer</p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
        <div class="choice">
          <input type="radio" class="choice__input" id="radio-va" name="payment" value="va" v-model="payment">
          <label class="choice__label" for="radio-va">
            <p>Virtual Account</p>
          </label>
          <span class="choice__check material-icons">check</span>
        </div>
      </div>
      <span
        class="msg--error"
        v-if="errors.includes('payment')"
      >* Required</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      shipment: '',
      payment: ''
    }
  },
  computed: {
    errors() {
      return this.$store.state.paymentErrors
    },
  },
  watch: {
    shipment: function (val) {
      this.$store.commit('setShipment', val)
    },
    payment: function (val) {
      this.$store.commit('setPayment', val)
    }
  },
  methods: {
    syncFromStore() {
      this.shipment = this.$store.state.shipment
      this.payment = this.$store.state.payment
    }
  },
  mounted() {
    this.$store.commit('setCurrentPage', 'payment')
    this.syncFromStore()
  }
}
</script>
