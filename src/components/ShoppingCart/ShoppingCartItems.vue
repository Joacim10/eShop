<template>
  <div>
    <!-- Loopar ut produkt struktur med produkter -->
  <table class="table" v-if="shoppingCart.length > 0"> 
      <thead class="mb-0 mt-0 border-bottom py-0">
        <tr>
          <th class="py-0 pl-4">Products</th>
          <th class="py-0">Price</th>
          <th class="py-0">Quantity</th>
          <th class="py-0">Subtotal</th>
        </tr>
      </thead>  
      <tbody>  
        <tr v-for="cartItem in shoppingCart" :key="cartItem._id" :cartItem="cartItem" >
          <th scope="row ">
              <i v-on:click.stop="deleteProductFromCart(cartItem.product._id)" class="fas fa-times-circle ml-2 "></i>
                <span class="mr-3">
                  <img class="img-fluid imageWidth ml-1 " :src="`${cartItem.product.image}`" alt="">
                </span>
                <span class="ml-0 verticalCenter mlSmall ">{{cartItem.product.name}}</span>
          </th>
          <td class=" bTop">
            <span> ${{cartItem.product.price}}</span>
          </td>

          <td class="bTop">
            <div class="d-flex">
            <button class="border rounded px-2 bgWhite hoverBtn" v-on:click.stop="decreaseQuantity(cartItem.product)">-</button>
            <span class="border bgWhite px-2 py-1 rounded hoverBtn">{{cartItem.quantity}}</span>
            <button class="bgWhite border px-2 rounded hoverBtn"  v-on:click.stop="increaseQuantity(cartItem.product)">+</button>
            </div>
          </td>

          <td class="theme bTop">
            <span>${{ cartItem.product.price * cartItem.quantity}}</span>
          </td>
        </tr>
      </tbody>
    </table>
            <!-- Om shoppingcart är noll visa detta  -->
      <div v-if="shoppingCart.length === 0" class="text-center mt-2">
        <h1 class="theme sizeMobile"> SHOPPINGCART IS EMPTY </h1>
        <router-link to="/products"> <button class=" mt-3 py-2 px-4 paddingShoppingCart btn btnTheme text-white">CHECK OUT OUR PRODUCTS</button> </router-link>
      </div>
      
      <div v-if="shoppingCart.length > 0"  class="d-flex justify-content-end">
        <button v-on:click="clearAllCartItem()" class=" px-4 py-2 btn  btnRadius bgDarkBlue text-uppercase text-white font-weight-bold">CLEAR CART</button>
      </div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {

  
    methods: {
         ...mapActions(["deleteProductFromCart", "increaseQuantity", "decreaseQuantity", "clearAllCartItem"]),
         
          
         
    },

 computed: {
    ...mapGetters(["shoppingCart","product","shoppingCartItemCount", "shoppingCartTotal"])
  }


  
   
  
  
}
</script>

<style scoped>
.paddingShoppingCart {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
button:focus {
   outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
}

.table td {
  vertical-align: middle;
}
th, td {
  border-top: 0;
  border-bottom: 0 !important;
}
.btnRadius{
  border-radius: 30px ;
}
.hoverBtn:hover{
  background-color:var(--theme);
  color: white;
}
.fa-times-circle {
  color: gray;
  font-size: 20px;
}
i {
  cursor: pointer;
}
.imageWidth {
  width: 60px;

}
.border-bottom {
  border-bottom: 2px solid var(--theme) !important;
}

@media (max-width: 375px) {
  .mlSmall {
  margin-left: 0px !important;
  
  font-size: 15px;
  
  
  }
  .sizeMobile{
    font-size: 30px;
    
  
  }
}

    
</style>