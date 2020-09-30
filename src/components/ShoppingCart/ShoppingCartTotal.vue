<template>
  <div>
    <div class="card mt-2">
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
          <p class="theme">${{shoppingCartTotal}}</p>
        </div>
        <router-link to="/checkout">
          <button
            class="btnRadiusCart py-2 mt-1 themeBg border-0 text-white pxCartBtn"
          >PROCEED TO CHECKOUT</button>
        </router-link>
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
    ...mapGetters(["shoppingCartTotal"])
  }
};
</script>

<style scoped>
.pxCartBtn {
  padding-right: 50px;
  padding-left: 50px;
}
.btnRadiusCart {
  border-radius: 20px;
}
</style>