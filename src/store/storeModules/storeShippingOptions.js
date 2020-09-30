// 
// modul för store funktioner för shoppingcart
//

// exporterar "store" funktioner för shoppingcart "cart"
export default {

    // här sparas data
    state:{
      shippingOption: null
    },
  
    mutations: {
      // här utförs ändring av data
      SET_SHIPPING_OPTION(state, shippingOption) {
        state.shippingOption = shippingOption;
      //  sessionStorage.setItem('shippingOption',JSON.stringify(state.shippingOption))
      },
      //SET_SHIPPING_WAY(state){
     //   let shippingOption = JSON.parse(sessionStorage.getItem('shippingOption'))
     //   if (shippingOption) {
     //     state.shippingOption = shippingOption
     //   }
     // },
    
      
      
  
    },
    actions: {
      updateshippingOption({commit}, value) {
        commit('SET_SHIPPING_OPTION', value)
      },
      setShoppingOption({commit}){
        commit('SET_SHIPPING_WAY')
      },

    },
    getters:{
         // hämtar data från state cart
    getShippingData(state) {
      // console.log(state.cart)
      return state.shippingOption
    },
    
    }
  
  
    
  
  
  
  
  
  }
  // slut på exports