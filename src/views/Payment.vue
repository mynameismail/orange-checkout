<template>
  <div id="payment">
    <div class="header">
      <div class="header__text">Shipment</div>
      <div class="header__underline"></div>
    </div>
    <div class="shipment">
      <div class="choice">
        <input type="radio" id="radio-gosend" name="shipment" value="gosend">
        <label for="radio-gosend">
          <span class="text">GO-SEND</span><br>
          <span class="price">15,000</span>
        </label>
        <span class="check material-icons">check</span>
      </div>
      <div class="choice">
        <input type="radio" id="radio-jne" name="shipment" value="jne">
        <label for="radio-jne">
          <span class="text">JNE</span><br>
          <span class="price">9,000</span>
        </label>
        <span class="check material-icons">check</span>
      </div>
      <div class="choice">
        <span class="check material-icons">check</span>
        <input type="radio" id="radio-personal" name="shipment" value="personal">
        <label for="radio-personal">
          <span class="text">Personal Courier</span><br>
          <span class="price">29,000</span>
        </label>
        <span class="check material-icons">check</span>
      </div>
    </div>
    <div class="header">
      <div class="header__text">Payment</div>
      <div class="header__underline"></div>
    </div>
    <div class="payment">
      <div class="choice">
        <input type="radio" id="radio-ewallet" name="payment" value="ewallet">
        <label for="radio-ewallet">
          <span class="text">e-Wallet</span><br>
          <span class="price">1,500,000 left</span>
        </label>
        <span class="check material-icons">check</span>
      </div>
      <div class="choice">
        <input type="radio" id="radio-bank" name="payment" value="bank">
        <label for="radio-bank">
          <span class="text">Bank Transfer</span><br>
          <span class="price"></span>
        </label>
        <span class="check material-icons">check</span>
      </div>
      <div class="choice">
        <span class="check material-icons">check</span>
        <input type="radio" id="radio-va" name="payment" value="va">
        <label for="radio-va">
          <span class="text">Virtual Account</span><br>
          <span class="price"></span>
        </label>
        <span class="check material-icons">check</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment'
}
</script>
