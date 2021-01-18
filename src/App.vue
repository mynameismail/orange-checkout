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
        <div class="stepper__step step2">
          <div class="number">2</div>
          <div class="text">Payment</div>
        </div>
        <div class="stepper__arrow">
          <span class="material-icons">keyboard_arrow_right</span>
        </div>
        <div class="stepper__step step3">
          <div class="number">3</div>
          <div class="text">Finish</div>
        </div>
      </div>
      <div class="back">
        <span class="back__icon material-icons">arrow_back</span>
        <span class="back__text">Back to cart</span>
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
            <div class="summary__item delivery-estimation">
              <div class="divider"></div>
              <div class="text">Delivery estimation</div>
              <div class="value">today by GO-SEND</div>
            </div>
            <div class="summary__item payment-method">
              <div class="divider"></div>
              <div class="text">Payment method</div>
              <div class="value">Bank Transfer</div>
            </div>
          </div>
          <div class="pricing">
            <div class="pricing__item">
              <span class="text">Cost of goods</span>
              <span class="value">500,000</span>
            </div>
            <div class="pricing__item">
              <span class="text">Dropshipping Fee</span>
              <span class="value">5,900</span>
            </div>
            <div class="pricing__item">
              <span class="text">GO-SEND shipment</span>
              <span class="value">15,000</span>
            </div>
            <div class="pricing__item total">
              <span class="text">Total</span>
              <span class="value">520,900</span>
            </div>
            <button class="pricing__btn-continue">Continue to Payment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
