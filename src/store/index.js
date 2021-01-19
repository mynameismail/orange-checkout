import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'delivery',
    asDropshipper: false,
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
  },
  mutations: {
    setAsDropshipper(state, payload) {
      state.asDropshipper = payload
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload
    },
    setShipment(state, payload) {
      state.shipment = payload
    },
    setPayment(state, payload) {
      state.payment = payload
    },
  },
  actions: {
  },
})
