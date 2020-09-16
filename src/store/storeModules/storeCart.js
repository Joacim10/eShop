// 
// modul för store funktioner för shoppingcart
//

// exporterar "store" funktioner för shoppingcart "cart"
export default {

  // här sparas data
  state:{
    cart: []
  },

  mutations: {
    // här utförs ändring av data
    
    ADD_TO_CART(state, {product,quantity}){
      // console.log(product[0]._id)

      let exists = state.cart.find(item => {
        return item.product[0]._id === product[0]._id
      })
      if (exists) {
        // console.log(exists)
        exists.quantity += quantity;
        // spara till storage
      sessionStorage.setItem('mycart',JSON.stringify(state.cart))
        return
      }
      state.cart.push({product,quantity})
      // spara till storage
      sessionStorage.setItem('mycart',JSON.stringify(state.cart))

    },
    DELETE_FROM_CART(state,id){
      // console.log(id)
      state.cart = state.cart.filter(item => {return item.product[0]._id !== id})
      // spara till storage
      sessionStorage.setItem('mycart',JSON.stringify(state.cart))
    },
    INCREASE_QUANT_CART_ITEM(state,cartItem){
      // console.log(cartItem[0]._id)
      // letar efter den produkt som ska ökas i antal
      let item = state.cart.find(item => {
        // console.log(item.product[0]._id)
        return item.product[0]._id === cartItem[0]._id
      })
      // console.log(item);
      // om den finns så ökar vi antal med 1
      if (item) {
        item.quantity += 1;
        // spara till storage
        sessionStorage.setItem('mycart',JSON.stringify(state.cart))
      }
    },
    DECREASE_QUANT_CART_ITEM(state,cartItem){
      // console.log(cartItem._id)
      // letar efter den produkt som ska ökas i antal
      let item = state.cart.find(item => {
        return item.product[0]._id === cartItem[0]._id
      })
      // console.log(item);
      // om den finns och antal mer än 1 minskar vi antal med 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // spara till storage
        sessionStorage.setItem('mycart',JSON.stringify(state.cart))
      }
    },

    CLEAR_CART(state){
      state.cart = []
    },

    SET_SHOPPINGCART(state){
      let cart = JSON.parse(sessionStorage.getItem('mycart'))
      if (cart) {
        state.cart = cart
      }
    }

  },

  actions: {
    // anropas från en component
    
    addProductToCart({commit},{product,quantity}){

      // console.log(product)

      commit('ADD_TO_CART', {product,quantity})

    },
    deleteProductFromCart({commit}, id){
      // console.log('delete')
      // console.log(id)
      commit('DELETE_FROM_CART', id)
    },
    increaseQuantity({commit},cartItem){
      // console.log(cartItem)
      commit('INCREASE_QUANT_CART_ITEM', cartItem)
    },
    decreaseQuantity({commit},cartItem){
      // console.log(cartItem)
      commit('DECREASE_QUANT_CART_ITEM', cartItem)
    },

    clearAllCartItem({commit}){
      commit('CLEAR_CART')
    },

    setShoppingCart({commit}){
      commit('SET_SHOPPINGCART')
    }

  },

  getters: {
    // hämtar data från state cart
    shoppingCart(state) {
      // console.log(state.cart)
      return state.cart
    },

    shoppingCartTotal(state) {
      let total = 0
      if (state.cart.length !== 0) {
        state.cart.forEach(item => {

          total += item.product[0].price * item.quantity

        })
      }

      return total
    },

    shoppingCartItemCount(state) {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })

      return items
    },
    
  }





}
// slut på exports







