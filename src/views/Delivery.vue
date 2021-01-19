<template>
  <div id="delivery">
    <div class="header">
      <div class="header__text">Delivery details</div>
      <div class="header__underline"></div>
    </div>
    <div class="form">
      <div class="form__details">
        <div class="input-group">
          <input
            type="text"
            id="details-email"
            :class="`input--${valid.emailAddr}`"
            v-model="emailAddr"
            required>
          <label
            for="details-email"
            :class="`label--${valid.emailAddr}`"
          >Email</label>
          <span
            class="icon material-icons"
            :class="`icon--${valid.emailAddr}`"
          >{{ valid.emailAddr == 'valid' ? 'check' : 'clear' }}</span>
        </div>
        <div class="input-group">
          <input 
            type="text" 
            id="details-phone"
            :class="`input--${valid.phone}`"
            v-model="phone"
            maxlength="20"
            required>
          <label 
            for="details-phone"
            :class="`label--${valid.phone}`"
          >Phone Number</label>
          <span
            class="icon material-icons"
            :class="`icon--${valid.phone}`"
          >{{ valid.phone == 'valid' ? 'check' : 'clear' }}</span>
        </div>
        <div class="input-group">
          <textarea
            id="details-address"
            :class="`input--${valid.address}`"
            v-model="address"
            maxlength="120"
            required></textarea>
          <label 
            for="details-address"
            :class="`label--${valid.address}`"
          >Delivery Address</label>
          <span
            class="icon material-icons"
            :class="`icon--${valid.address}`"
          >{{ valid.address == 'valid' ? 'check' : 'clear' }}</span>
        </div>
      </div>
      <div class="form__dropshipper">
        <div class="checkbox">
          <input
            type="checkbox"
            id="dropshipper-check"
            class="checkbox__input"
            v-model="asDropshipper">
          <label
            for="dropshipper-check"
            class="checkbox__label"
          >
            <div class="box">
              <span class="icon material-icons">check</span>
            </div>
            <span class="text">Send as dropshipper</span>
          </label>
        </div>
        <div class="input-group">
          <input
            type="text"
            id="dropshipper-name"
            :class="`input--${valid.dropshipperName}`"
            v-model="dropshipperName"
            :disabled="!asDropshipper"
            :required="asDropshipper">
          <label
            for="dropshipper-name"
            :class="`label--${valid.dropshipperName}`"
          >Dropshipper name</label>
          <span
            class="icon material-icons"
            :class="`icon--${valid.dropshipperName}`"
          >{{ valid.dropshipperName == 'valid' ? 'check' : 'clear' }}</span>
        </div>
        <div class="input-group">
          <input
            type="text"
            id="dropshipper-phone"
            :class="`input--${valid.dropshipperPhone}`"
            v-model="dropshipperPhone"
            maxlength="20"
            :disabled="!asDropshipper"
            :required="asDropshipper">
          <label
            for="dropshipper-phone"
            :class="`label--${valid.dropshipperPhone}`"
          >Dropshipper phone number</label>
          <span
            class="icon material-icons"
            :class="`icon--${valid.dropshipperPhone}`"
          >{{ valid.dropshipperPhone == 'valid' ? 'check' : 'clear' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isValidEmail, isValidPhone } from '../helper'

export default {
  name: 'Delivery',
  data() {
    return {
      valid: {
        emailAddr: '',
        phone: '',
        address: '',
        dropshipperName: '',
        dropshipperPhone: '',
      }
    }
  },
  computed: {
    emailAddr: {
      get() { return this.$store.state.emailAddr },
      set(val) { this.$store.commit('setEmailAddr', val) }
    },
    phone: {
      get() { return this.$store.state.phone },
      set(val) { this.$store.commit('setPhone', val) }
    },
    address: {
      get() { return this.$store.state.address },
      set(val) { this.$store.commit('setAddress', val) }
    },
    asDropshipper: {
      get() { return this.$store.state.asDropshipper },
      set(val) { this.$store.commit('setAsDropshipper', val) }
    },
    dropshipperName: {
      get() { return this.$store.state.dropshipperName },
      set(val) { this.$store.commit('setDropshipperName', val) }
    },
    dropshipperPhone: {
      get() { return this.$store.state.dropshipperPhone },
      set(val) { this.$store.commit('setDropshipperPhone', val) }
    },
  },
  watch: {
    emailAddr: function (val) {
      this.valid.emailAddr = isValidEmail(val) ? 'valid' : 'invalid'
      if (this.emailAddr == '') {
        this.valid.emailAddr = ''
      }
    },
    phone: function (val) {
      this.valid.phone = isValidPhone(val) ? 'valid' : 'invalid'
      if (this.phone == '') {
        this.valid.phone = ''
      }
    },
    address: function (val) {
      this.valid.address = this.address.length > 0 ? 'valid' : ''
    },
    asDropshipper: function (yes) {
      if (!yes) {
        this.dropshipperName = ''
        this.dropshipperPhone = ''
      }
    },
    dropshipperName: function (val) {
      this.valid.dropshipperName = this.dropshipperName.length > 0 ? 'valid' : ''
    },
    dropshipperPhone: function (val) {
      this.valid.dropshipperPhone = isValidPhone(val) ? 'valid' : 'invalid'
      if (this.dropshipperPhone == '') {
        this.valid.dropshipperPhone = ''
      }
    },
  },
  mounted() {
    this.$store.commit('setCurrentPage', 'delivery')
  }
}
</script>
