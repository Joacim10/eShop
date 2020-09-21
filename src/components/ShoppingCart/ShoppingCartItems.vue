<template>
  <div>
    
        
    <table class="table table-hover kalle">
      <tbody  v-for="cartItem in shoppingCart" :key="cartItem._id" :cartItem="cartItem">
        <tr>
          <th scope="row">
            
           
            <button v-on:click.stop="deleteProductFromCart(cartItem.product._id)">X</button>

           

             <img class="img-fluid imageWidth" :src="`${cartItem.product.image}`" alt="">
            <span class="ml-2 verticalCenter">{{cartItem.product.name}}</span>
            
          </th>
          <td class=" bTop">
            <span> ${{cartItem.product.price}}</span>
          </td>

          <td class="bTop">
            <button class="border rounded px-2 bgWhite" v-on:click.stop="decreaseQuantity(cartItem.product)">-</button>
            <span class="border bgWhite px-2 py-1 rounded">{{cartItem.quantity}}</span>
            <button class="bgWhite border px-2 rounded"  v-on:click.stop="increaseQuantity(cartItem.product)">+</button>
          </td>

          <td class="theme bTop">
            <span>${{ cartItem.product.price * cartItem.quantity}}</span>
          </td>
        </tr>
      </tbody>
      
    </table>
    <div class="d-flex justify-content-end">
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
.fa-times-circle {
  color: gray;
  font-size: 20px;
}
 .imageWidth {
        width: 70px;
        
       
    }
</style>