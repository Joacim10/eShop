// ----- compare STORE ------

export default {

  //STATE skickar till getters
  // här sparas data

  state: {
    compare: []
  },

  // MUTATIONS skickar till state
  // här utförs ändring av data
  // spara till storage

  mutations: {

    ADD_TO_COMPARE(state, product) {
      console.log(state.compare)
      console.log(product)

      let exists = state.compare.find(item => { return item._id === product._id })
      
      if (exists) {
        sessionStorage.setItem('compare', JSON.stringify(state.compare))
        return
      }else{
        state.compare.push( product )
        sessionStorage.setItem('compare', JSON.stringify(state.compare))
      }

    },

    DELETE_FROM_COMPARE(state, id) {
      state.compare = state.compare.filter(item => { return item._id !== id })

      sessionStorage.setItem('compare', JSON.stringify(state.compare))
    },

  },



  //ACTIONS skickar till mutation
  // anropas från en component

  actions: {

    addProductToCompare({ commit }, product ) {
      commit('ADD_TO_COMPARE', product )

    },

    deleteProductFromCompare({ commit }, id) {
      commit('DELETE_FROM_COMPARE', id)
    },

  },



  //GETTERS
  // hämtar data från state cart

  getters: {

    compare(state) {
      return state.compare
    },

    compareItemCount(state) {
      let items = state.compare.length

      return items
    },
  }
}