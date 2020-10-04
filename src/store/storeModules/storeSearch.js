

export default {
 state: {
  searchValue: '',
  selectCategory: ''
 },
 mutations: {
  NEW_SEARCH(state, value) {
    state.searchValue = value.input
    state.selectCategory = value.selectCategory
  },
  RESET_SEARCH(state, value) {
    state.searchValue = value
    state.categoryValue = value
  }
 },
 actions: {
  newSearch({ commit }, {input, selectCategory}) {
    commit('NEW_SEARCH', {input, selectCategory} )
  },
  resetSearch({ commit }) {
    commit('RESET_SEARCH', '')
  }
 }, 
 getters: {
  getSearchValue(state) {
    return state.searchValue
  },
  getCategoryValue(state) {
    return state.selectCategory
  }
 }
}







