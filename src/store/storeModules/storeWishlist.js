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

    ADD_TO_WISHLIST(state, product) {
      //console.log(state.wishlist)
      //console.log(product)

      let exists = state.wishlist.find(item => { return item._id === product._id })
      
      if (exists) {
        sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        return
      }else{
        state.wishlist.push( product )
        sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      }

    },

    DELETE_FROM_WISHLIST(state, id) {
      state.wishlist = state.wishlist.filter(item => { return item._id !== id })

      sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },

  },



  //ACTIONS skickar till mutation
  // anropas från en component

  actions: {

    addProductToWishlist({ commit }, product ) {
      commit('ADD_TO_WISHLIST', product )

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
    },

    wishlistItemCount(state) {
      let items = state.wishlist.length

      return items
    },
  }
}