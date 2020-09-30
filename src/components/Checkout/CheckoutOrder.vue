<template>
  <div>
    
    <!-- Product item -->
    <!-- om det finns produketr i shoppingcart visas de här -->
    <div v-if="shoppingCart.length > 0">
      <div
        v-for="cartItem in shoppingCart"
        :key="cartItem._id"
        :cartItem="cartItem"
      >
        <div class="d-flex justify-content-between border-bottom">
          <p class="">{{ cartItem.product.name }}</p>
          <p class="theme">${{ cartItem.product.price * cartItem.quantity }}</p>
        </div>
      </div>
    </div>
    <!-- annars visar vi ett meddelande -->
    <div v-else>
      <p>No item in shoppincart</p>
    </div>

    

    <!-- Subtotal -->
    <div class="d-flex justify-content-between border-bottom mt-3">
      <p class="font-weight-bold theme">Subtotal</p>
      <p class="theme">${{ shoppingCartTotal }}</p>
    </div>

    <!-- Shipping -->
   
      <ShippingOptions />
  

    <!-- TOTAL -->
    <div class="d-flex justify-content-between mt-3">
      <p class="font-weight-bold text-uppercase theme">TOTAL</p>
      <p class="theme">${{ shoppingCartTotal }}</p>
    </div>

    <div class="theme my-hr"></div>

    <div>
      <!--   Payment                          -->
      <div class="border-bottom mt-3 pb-3">
        <div>
          <div class="d-flex">
            <span>
              <input
                type="radio"
                aria-label="Radio button for following text input"
                value="Direct bank transfer"
                 v-model="paymentType"
                
                 

              />
            </span>
            <span class="ml-2">Direct bank transfer</span>

            <br />
          </div>
        </div>

        <div>
          <div class="d-flex">
            <span>
              <input
                type="radio"
                aria-label="Radio button for following text input"
                value="Check Payment"
                 v-model="paymentType"
                
              />
            </span>
            <span class="ml-2">Check Payment</span>

            <br />
          </div>
        </div>

        <div>
          <div class="d-flex">
            <span>
              <input
                type="radio"
                aria-label="Radio button for following text input"
                value="Cash on delivery"
                 v-model="paymentType"
                 
              />
            </span>
            <span class="ml-2">Cash on delivery</span>

            <br />
          </div>
        </div>

        <div>
          <div class="d-flex align-items-end">
            <span>
              <input
                type="radio"
                aria-label="Radio button for following text input"
                value="Paypal"
                 v-model="paymentType"
                 
              />
            </span>
            <span class="ml-2">Paypal</span>
            <span class="theme ml-2">
              <img src="/Image/checkout/PayPalLogo.png" />
            </span>
            <span class="ml-2 small">
              <a href="#" class="grey">What is Paypal?</a>
            </span>

            <br />
          </div>
        </div>
        <!-- <p> {{paymentType}} </p> -->
      </div>
      <!-- payment end -->

      <div class="border-bottom mt-3 pb-3">
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our
          <a href="#" class="theme">privacy policy</a> .
        </p>
      </div>
      <div class="mt-3 pb-3">
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value
              id="acceptTerms"
              v-model="acceptTerms"
            />
            <label class="form-check-label" for="acceptTerms">
              I have read and agree to the website terms and
              <a href="#" class="theme">conditions</a>
              <span class="theme">*</span>
            </label>
          </div>
        </div>
      </div>

      <!-- knapp går bara att trycka på om shipping data är valid och man har godkänt vilkoren -->
      <button
        type="submit"
        class="btn btnTheme white col-lg-auto text-uppercase text-bold"
        v-bind:disabled="!shippingDataValid || !acceptTerms || !isUserLoggedIn"
        v-on:click.prevent="submitOrder"
      >
        Place order
      </button>
      <!-- <p>{{ shippingDataValid }} {{ acceptTerms }} {{ isUserLoggedIn }}</p> -->
    </div>
  </div>
</template>


<script>
import ShippingOptions from '../ReusableComponents/ShippingOptions'
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckoutOrder",
  components: {
    ShippingOptions,
  },
  data() {
    return {
      paymentType:"Direct bank transfer",
      acceptTerms: false,
      submitted: false,
      message: "",
    };
  },

  methods: {
    ...mapActions(["createNewOrder","clearAllCartItem","clearShippingData"]),

    async submitOrder() {
      // skapar ett objekt med data om användare, valda produkter och leverans data
      const newOrder = {
        userId: this.user.id,
        userData: this.user,
        shippingData: this.shippingData,
        orderItems: this.shoppingCart,
        orderTotalAmount: this.shoppingCartTotal,
        paymentType: this.paymentType,
      };
      //  skickar en "action" till store för att spara data i databas
      const response = await this.createNewOrder(newOrder);
      // kollar om det gick att spara till databas
      if (response.status == 200) {
        console.log("Order submitted...    " + response);

        // rensar shoppingvagn
        this.clearAllCartItem();
        // rensa shippingdata eller vill man ha kvar den ?
        this.clearShippingData();


        //  går till en sida som visar att order är skickad ?
                  //  this.$router.push("/checkout/checkoutOrderOk");
        // eller visa en modal ?

      } else {
        console.log(response);
      }

      

    },
  },

  computed: {
    ...mapGetters([
      "shoppingCart",
      "product",
      "shoppingCartItemCount",
      "shoppingCartTotal",
      "shippingDataValid",
      "shippingData",
      "isUserLoggedIn",
      "user",
    ]),
  },
};
</script>

<style scoped>
.my-hr {
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--theme);
}
</style>