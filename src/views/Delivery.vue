<template>
  <div id="delivery">
    <div class="header">
      <div class="header__text">Delivery details</div>
      <div class="header__underline"></div>
    </div>
    <div class="form">
      <div class="form__details">
        <div class="input-group input-text">
          <input type="text" id="details-email" required>
          <label for="details-email">Email</label>
          <!-- <span class="invalid material-icons">clear</span>
          <span class="valid material-icons">check</span> -->
        </div>
        <div class="input-group input-tel">
          <input type="tel" id="details-phone" required>
          <label for="details-phone">Phone Number</label>
          <!-- <span class="invalid material-icons">clear</span>
          <span class="valid material-icons">check</span> -->
        </div>
        <div class="input-group input-textarea">
          <textarea id="details-address" maxlength="120" required></textarea>
          <label for="details-address">Delivery Address</label>
          <!-- <span class="invalid material-icons">clear</span>
          <span class="valid material-icons">check</span> -->
        </div>
      </div>
      <div class="form__dropshipper">
        <div class="input-check">
          <input type="checkbox" id="dropshipper-check" v-model="asDropshipper">
          <label for="dropshipper-check">Send as dropshipper</label>
        </div>
        <div class="input-group input-text">
          <input type="text" id="dropshipper-name" :disabled="!asDropshipper" :required="asDropshipper">
          <label for="dropshipper-name">Dropshipper name</label>
          <!-- <span class="invalid material-icons">clear</span>
          <span class="valid material-icons">check</span> -->
        </div>
        <div class="input-group input-tel">
          <input type="tel" id="dropshipper-phone" :disabled="!asDropshipper" :required="asDropshipper">
          <label for="dropshipper-phone">Dropshipper phone number</label>
          <!-- <span class="invalid material-icons">clear</span>
          <span class="valid material-icons">check</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data() {
    return {
      asDropshipper: false
    }
  },
  watch: {
    asDropshipper: function (val) {
      this.$store.commit('setAsDropshipper', val)
    }
  },
  methods: {
    syncFromStore() {
      this.asDropshipper = this.$store.state.asDropshipper
    }
  },
  mounted() {
    this.$store.commit('setCurrentPage', 'delivery')
    this.syncFromStore()
  }
}
</script>
