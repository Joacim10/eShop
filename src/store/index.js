import Vue from 'vue'
import Vuex from 'vuex'

// importerar modulerna för produkter och shoppingcart
import storeProducts from './storeModules/storeProducts';
import storeCart from './storeModules/storeCart';
import storeUser from './storeModules/storeUser';
import storeOrders from './storeModules/storeOrders';
import storeWishlist from './storeModules/storeWishlist';
import storeCompare from './storeModules/storeCompare';
import storeModal from './storeModules/storeModal';
import storeShippingOptions from './storeModules/storeShippingOptions'

Vue.use(Vuex)

export default new Vuex.Store({
  
  // använder de importerade modulerna från storeProducts.js och storeCart.js
  // som innehåller state, mutations, actions, getters
  modules: {
    storeProducts,
    storeCart,
    storeUser,
    storeOrders,
    storeWishlist,
    storeCompare,
    storeShippingOptions,
    storeModal
  }
})
