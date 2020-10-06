<template>
  <div>
    <div class="card mt-2 marginCartTop">
      <div class="card-header bgDarkBlue text-center theme f-24 py-1">
        <span>CART TOTALS</span>
      </div>

      <div class="card-body">
        <div class="d-flex justify-content-between border-bottom">
          <p class="font-weight-bold">Subtotal</p>
          <p class="theme">${{shoppingCartTotal}}</p>
        </div>
          
              <ShippingOptions />
         
        


        <div class="d-flex justify-content-between mt-3">
          <p class="font-weight-bold">TOTAL</p>
          <p class="theme">${{shoppingCartTotal + getShippingCost}}</p>
        </div>
        <div class="d-flex justify-content-center">
        <router-link :to="{ path:'/checkout'}">
          <button v-bind:disabled="shoppingCart.length === 0"
                  v-bind:class="{btndisabled:shoppingCart.length === 0}"
            class="btnRadiusCart py-2 paddingCheckout mt-1 themeBg border-0 text-white pxCartBtn"
          >PROCEED TO CHECKOUT</button>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShippingOptions from "../ReusableComponents/ShippingOptions"
import { mapGetters } from "vuex";
export default {
  components: {
    ShippingOptions,
  },
  props: ["cartItem"],

   

  computed: {
    ...mapGetters(["shoppingCartTotal",'shoppingCart','getShippingCost',])
  }
};
</script>

<style scoped>

.paddingCheckout {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
button:focus {
   outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
}

.pxCartBtn {
  padding-right: 50px;
  padding-left: 50px;
}
.btnRadiusCart {
  border-radius: 30px;
}
.btndisabled {
  background-color: #8ab8b3 !important;
}
@media (max-width: 768px) {
  .marginCartTop {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
  
  }
}
</style>