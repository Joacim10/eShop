
export default {
    state:{
      showModal: false,
      modalType: '',
      data: {}
    },
    mutations: {
      TOGGLE_MODAL(state, {modalType, data}) {
        state.showModal = !state.showModal
        state.modalType = modalType
        state.data = data
      }
    },
    actions: {
      toggleModal ({commit}, {modalType, data}) {
        commit('TOGGLE_MODAL', {modalType, data})
      }
    },
    getters: {
      showModal(state) {
        return state.showModal
      },
      modalType(state) {
        return state.modalType
      },
      modalData(state) {
        return state.data
      },
    }
  }
  
  
  
  
  
  
  
  