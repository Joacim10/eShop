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
        <div class="d-flex justify-content-between border-bottom mt-3">
          <p class="font-weight-bold align-self-center">Shipping</p>
          <div>
            <div class="d-flex justify-content-end">

              <span class="mr-2">Flat rate:</span>
              <span class="theme mr-2">$20.00</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input" />
              
              </span>
              <br />
            </div>

         

            <div class="d-flex justify-content-end mt-1">
              <span class="mr-2">Free shipping</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input" />
              </span>
              <br />
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span class="mr-2">Local pickup:</span>
              <span class="theme mr-2">$20.00</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input" />
              </span>
              <br />
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span>Shipping to AL</span>
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span class>Change adress</span>
            </div>
          </div>
        </div>
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
import { mapGetters } from "vuex";
export default {

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