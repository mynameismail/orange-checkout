import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { isValidEmail, isValidPhone } from '../helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'delivery',
    emailAddr: '',
    phone: '',
    address: '',
    asDropshipper: false,
    dropshipperName: '',
    dropshipperPhone: '',
    deliveryErrors: [],
    shipmentType: {
      'gosend': {
        name: 'GO-SEND',
        price: 15000,
        when: 'today'
      },
      'jne': {
        name: 'JNE',
        price: 9000,
        when: '2 days'
      },
      'personal': {
        name: 'Personal Courier',
        price: 29000,
        when: '1 day'
      }
    },
    paymentType: {
      'ewallet': 'e-Wallet',
      'bank': 'Bank Transfer',
      'va': 'Virtual Account'
    },
    shipment: null,
    payment: null,
    paymentErrors: [],
    orderId: null,
  },
  mutations: {
    setCurrentPage(state, payload) {
      state.currentPage = payload
    },
    setEmailAddr(state, payload) {
      state.emailAddr = payload
    },
    setPhone(state, payload) {
      state.phone = payload
    },
    setAddress(state, payload) {
      state.address = payload
    },
    setAsDropshipper(state, payload) {
      state.asDropshipper = payload
    },
    setDropshipperName(state, payload) {
      state.dropshipperName = payload
    },
    setDropshipperPhone(state, payload) {
      state.dropshipperPhone = payload
    },
    setDeliveryErrors(state) {
      let errors = []

      if (!isValidEmail(state.emailAddr)) errors.push('emailAddr')
      if (!isValidPhone(state.phone)) errors.push('phone')
      if (state.address == '') errors.push('address')
      if (state.asDropshipper && state.dropshipperName == '') errors.push('dropshipperName')
      if (state.asDropshipper && state.dropshipperPhone == '') errors.push('dropshipperPhone')
      
      state.deliveryErrors = errors
    },
    setPaymentErrors(state) {
      let errors = []

      if (!(state.shipment in state.shipmentType)) errors.push('shipment')
      if (!(state.payment in state.paymentType)) errors.push('payment')

      state.paymentErrors = errors
    },
    setShipment(state, payload) {
      state.shipment = payload
    },
    setPayment(state, payload) {
      state.payment = payload
    },
    setOrderId(state, payload) {
      state.orderId = payload
    },
    resetAll(state) {
      state.currentPage = 'delivery'
      state.emailAddr = ''
      state.phone = ''
      state.address = ''
      state.asDropshipper = false
      state.dropshipperName = ''
      state.dropshipperPhone = ''
      state.deliveryErrors = []
      state.shipment = null
      state.payment = null
      state.paymentErrors = []
      state.orderId = null
    },
  },
  plugins: [
    createPersistedState({
      key: 'orange-vuex',
      storage: window.localStorage
    })
  ],
})
