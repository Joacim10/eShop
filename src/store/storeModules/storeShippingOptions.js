// 
// modul för store funktioner för shoppingcart
//

// exporterar "store" funktioner för shoppingcart "cart"
export default {

  // här sparas data
  state: {
    shippingOption: 'Free shipping',
    shippingCost: 0,
  },

  mutations: {
    // här utförs ändring av data
    SET_SHIPPING_OPTION(state, shippingOption) {
      state.shippingOption = shippingOption;
      sessionStorage.setItem('shippingOption', JSON.stringify(state.shippingOption))
    },
    SET_SHIPPING_WAY(state) {
      let shippingOption = JSON.parse(sessionStorage.getItem('shippingOption'))
      if (shippingOption) {
        state.shippingOption = shippingOption
      }
    },


    UPDATE_SHIPPING_COST(state, shippingCost) {
      state.shippingCost = shippingCost;
      sessionStorage.setItem('shippingCost', JSON.stringify(state.shippingCost))
    },
    SET_SHIPPING_COST(state) {
      let shippingCost = JSON.parse(sessionStorage.getItem('shippingCost'))
      if (shippingCost) {
        state.shippingCost = shippingCost
      }
    },


  },
  actions: {
    updateshippingOption({ commit }, value) {
      commit('SET_SHIPPING_OPTION', value)
    },
    setShoppingOption({ commit }) {
      commit('SET_SHIPPING_WAY')
    },


    updateShippingCost({ commit }, value) {
      commit('UPDATE_SHIPPING_COST', value)
    },
    setShippingCost({ commit }) {
      commit('SET_SHIPPING_COST')
    },


  },
  getters: {
    // hämtar data från state
    getShippingData(state) {
      //
      return state.shippingOption
    },

    getShippingCost(state){
      return state.shippingCost
    },


  }








}
  // slut på exports