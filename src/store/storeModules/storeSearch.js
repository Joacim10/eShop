

export default {
 state: {
  searchValue: ''
 },
 mutations: {
  NEW_SEARCH(state, value) {
    state.searchValue = value
  },
  RESET_SEARCH(state, value) {
    state.searchValue = value
  }
 },
 actions: {
  newSearch({ commit }, value) {
    commit('NEW_SEARCH', value )
  },
  resetSearch({ commit }) {
    commit('RESET_SEARCH', '')
  }
 }, 
 getters: {
  getSearchValue(state) {
    return state.searchValue
  }
 }
}







