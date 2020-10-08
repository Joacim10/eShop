// 
// modul för store funktioner för produkter
// 

// importera axios
import axios from '../../helpers/helperAxios';


// exporterar "store" funktioner för produkter
export default {

  state: {
    products: {
      count: 1,
      data: [
        { id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://bit.ly/3mmOlL2', badgetype: '' }
      ]},
    product: { id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://bit.ly/3mmOlL2' }
  },

  mutations: {
    // här utförs ändring av data
    GET_PRODUCT_BY_ID(state, product) {
      // state.product = state.products.filter(p => p.id == id)[0]
      state.product = product
      sessionStorage.setItem('product', state.product)
    },

    GET_ALL_PRODUCTS(state, products) {
      state.products = products
      // console.log(state.products)
      // sessionStorage.setItem('products', state.products)
    }

  },

  actions: {
    // anropas från en component
    async getProductById({ commit }, id) {
      // api anrop här med axios tex.
    // console.log(id)
  

      let res = await axios.get('/products/' + id)

    

      //console.log('axios product', res.data[0])

      if (res !== null) {
        // commit('SET_STATE_PRODUCT', res.data)
        // anropar mutation
       //console.log(res.data)

        commit('GET_PRODUCT_BY_ID', res.data[0])
      }


    },

    async getAllProducts({ commit }) {
      let res = await axios.get('/products')

      // console.log(res)

      if (res !== null) {
        commit('GET_ALL_PRODUCTS', res.data)
      }
    }

  },

  getters: {
    products(state) {
      return state.products
    },
    product(state) {
      //console.log('product getter', state.product)
      // return state.product
      if(state.product == null && sessionStorage.getItem('product') !== null)
                state.product = sessionStorage.getItem('product')    
            
            return state.product

    }
  }


}