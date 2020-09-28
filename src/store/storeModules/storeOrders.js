// 
// modul för store funktioner för order
// 

// schema model för "OrderSchema" som ligger i api
// const OrderSchema = mongoDb.Schema({

//   _id: mongoDb.Schema.Types.ObjectId,
//   userId:{ type: String, required: [true, 'Please add user id'] },
//   userData:{type:Object, required:[true, 'Please add user data']},
//   shippingData:{type:Object, required:[true, 'Please add shippingdata']},
//   orderItems:{type:Array, required:[true, 'Please add order item']},
//   orderTotalAmount:{type:Number, required:[true, 'Please add order amount']}

// })


// importera axios
import axios from '../../helpers/helperAxios';

// exporterar "store" funktioner för ordrar
export default {

  // data för ordrar  orders: []
  state: {
    newOrder: {},
    order:[],
    orders: null,
    orderCreated: false,
    shippingDataValid: false,
    shippingData:{}
  },

  mutations: {

    SET_ORDERS_BY_CUSTOMER(state, ordersbycustomer) {
      state.orders = ordersbycustomer
    },
    SET_ORDER_CREATED(state, created) {
      state.orderCreated = created
    },

    SET_SHIPPINGDATA_VALID(state,valid){
      state.shippingDataValid = valid
    },
    SET_SHIPPINGDATA(state,data){
      state.shippingData = data
    }

  },

  actions: {

    // registrera en ny order
    async createNewOrder({ commit }, newOrder) {

      commit('SET_ORDER_CREATED', false)
      try {
        const response = await axios.post('/orders', newOrder)
        // skicka order till mongodb med axios http://localhost:9999/api/v1/orders
        // console.log(response.data)
        commit('SET_ORDER_CREATED', true)
        return response;

      } catch (error) {
        console.log(error)
        return error;
      }
      // return {data:"order created" , newOrder}
    },

    // hämta alla ordrar för en kund med id med axios http://localhost:9999/api/v1/orders/customer/
    async getOrdersByCustomer({ commit }, customerId) {
      // const data = {}
      const response = await axios.get('/orders/customer/' + customerId)

      if (response !== null) {
        commit('SET_ORDERS_BY_CUSTOMER', response)
      }
      // return "orders by customer"
    },

    storeShippingData({ commit },data){
      commit('SET_SHIPPINGDATA',data)
      commit('SET_SHIPPINGDATA_VALID',true)
    },
    clearShippingData({ commit }){
      commit('SET_SHIPPINGDATA',{})
    },
    storeShippingDataValid({ commit },value){
      commit('SET_SHIPPINGDATA_VALID',value)
    }

  },

  getters: {
    // hämtar och skickar tillbaka data
    order(state) {
      return state.order
    },

    orders(state) {
      // console.log(state.orders)
      return state.orders
    },

    shippingData(state){
      return state.shippingData
    },
    shippingDataValid(state){
      return state.shippingDataValid
    }



  }

}
// slut på export







