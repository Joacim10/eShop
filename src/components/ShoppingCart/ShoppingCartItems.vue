<template>
  <div>
  
  <table class="table"> 
      <thead class="mb-0 mt-0 border-bottom py-0">
        <tr>
          <th class="py-0">Products</th>
          <th class="py-0">Price</th>
          <th class="py-0">Quantity</th>
          <th class="py-0">Subtotal</th>
        </tr>
      </thead>  
      <tbody v-if="shoppingCart.length > 0">  
        <tr v-for="cartItem in shoppingCart" :key="cartItem._id" :cartItem="cartItem" >
          <th scope="row">
            
            <i v-on:click.stop="deleteProductFromCart(cartItem.product._id)" class="fas fa-times-circle"></i>
            <img class="img-fluid imageWidth ml-2" :src="`${cartItem.product.image}`" alt="">
            <span class="ml-2 verticalCenter">{{cartItem.product.name}}</span>
            
          </th>
          <td class=" bTop">
            <span> ${{cartItem.product.price}}</span>
          </td>

          <td class="bTop">
            <button class="border rounded px-2 bgWhite hoverBtn" v-on:click.stop="decreaseQuantity(cartItem.product)">-</button>
            <span class="border bgWhite px-2 py-1 rounded hoverBtn">{{cartItem.quantity}}</span>
            <button class="bgWhite border px-2 rounded hoverBtn"  v-on:click.stop="increaseQuantity(cartItem.product)">+</button>
          </td>

          <td class="theme bTop">
            <span>${{ cartItem.product.price * cartItem.quantity}}</span>
          </td>
        </tr>
       
      </tbody>
      
      <!--- OM SHOPPINGCART ÄR TOM -->
      <div v-if="shoppingCart.length === 0" class="text-center mt-5">
        <h1 class="theme"> SHOPPINGCART IS EMPTY </h1>
        <router-link to="/products"> <button class=" mt-3 py-2 btn btnTheme text-white">CHECK OUT OUR PRODUCTS</button> </router-link>
      </div>
    </table>
      
      
    <div v-if="shoppingCart.length > 0" class="d-flex justify-content-end">
        <button class=" px-4 py-2 btn  btnRadius bgDarkBlue text-uppercase text-white font-weight-bold">UPDATE CART</button>
      </div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
/*data: () => {
    return {
      object: [
        { desc: "Women smart high heal", price: "$120.00" },
        { desc: "Kalle Karlsson skor", price: "$110.00" },
        { desc: "Greta Gris väska", price: "$10.00" },
        { desc: "Pippi Långströms tröja", price: "$50.00" },

      ]
    };
    
  },*/
  
    methods: {
         ...mapActions(["deleteProductFromCart", "increaseQuantity", "decreaseQuantity"]),
         
          
         
    },

 computed: {
    ...mapGetters(["shoppingCart","product","shoppingCartItemCount", "shoppingCartTotal"])
  }


  
   
  
  
}
</script>

<style scoped>
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

    
</style>