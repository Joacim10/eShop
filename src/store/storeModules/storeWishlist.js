
// ----- WISHLIST STORE ------

export default {

  
  //STATE skickar till getters
  // här sparas data

  state: {
    wishlist: []
  },


  // MUTATIONS skickar till state
  // här utförs ändring av data
  // spara till storage

  mutations: {

    ADD_TO_WISHLIST(state, { product }) {

    console.log(product.product._id)
    console.log(product.product.name)


      let exists = state.wishlist.find(item => { return item.product._id === product._id })
      
      if (exists) {
        sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        return
      }

      state.wishlist.push({ product })
      sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))

    },


    DELETE_FROM_WISHLIST(state, id) {
      state.wishlist = state.wishlist.filter(item => { return item.product._id !== id })

      sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },


  },



  //ACTIONS skickar till mutation
  // anropas från en component

  actions: {


    addProductToWishlist({ commit }, product ) {
      commit('ADD_TO_WISHLIST', { product })

    },

    deleteProductFromWishlist({ commit }, id) {
      commit('DELETE_FROM_WISHLIST', id)
    },


  },



  //GETTERS
  // hämtar data från state cart

  getters: {

    wishlist(state) {
      return state.wishlist
    }

  }



}








