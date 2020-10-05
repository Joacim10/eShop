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

    <!-- Shipping Options-->
    <ShippingOptions />
    <!-- test -->
    <!-- {{getShippingData}} -->
    <!-- test -->
    <!-- Shipping Options end-->

    <!-- TOTAL -->
    <div class="mt-3 mb-2">
      <div class="d-flex justify-content-between align-items-center">
        <p class="font-weight-bold text-uppercase theme mb-0">TOTAL</p>
        <p class="theme mb-0">${{ shoppingCartTotal + getShippingCost }}</p>
      </div>
      <!-- <div v-if="getShippingCost > 0" class="mt-0 mb-0">
        <p class="text-right mt-0 mb-0">+ ${{ getShippingCost }} Shipping</p>
      </div> -->
    </div>

    <div class="theme my-hr"></div>

    <div>
      <!--   Payment                          -->
      <div class="border-bottom mt-3 pb-3">
        <div>
          <div class="d-flex">
            <CustomToolTip
              :customInputData="[
                {
                  data: false,
                  text:
                    'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.',
                },
              ]"
              v-bind:show="true"
            >
              <span>
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  id="Directbanktransfer"
                  value="Direct bank transfer"
                  v-model="paymentType"
                />
              </span>
              <!-- <span class="ml-2">Direct bank transfer</span> -->
              <label for="Directbanktransfer" class="ml-2"
                >Direct bank transfer</label
              >
            </CustomToolTip>
            <br />
          </div>
        </div>

        <div>
          <div class="d-flex">
            <CustomToolTip
              :customInputData="[
                {
                  data: false,
                  text:
                    'Make your payment with check. Please use your Order ID as the payment reference.',
                },
              ]"
              v-bind:show="true"
            >
              <span>
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  id="CheckPayment"
                  value="Check Payment"
                  v-model="paymentType"
                />
              </span>
              <!-- <span class="ml-2">Check Payment</span> -->
              <label for="CheckPayment" class="ml-2">Check Payment</label>
            </CustomToolTip>

            <br />
          </div>
        </div>

        <div>
          <div class="d-flex">
            <CustomToolTip
              :customInputData="[
                {
                  data: false,
                  text:
                    'Make your payment with cash on delivery. Please use your Order ID as the payment reference.',
                },
              ]"
              v-bind:show="true"
            >
              <span>
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  id="Cashondelivery"
                  value="Cash on delivery"
                  v-model="paymentType"
                />
              </span>
              <!-- <span class="ml-2">Cash on delivery</span> -->
              <label for="Cashondelivery" class="ml-2">Cash on delivery</label>
            </CustomToolTip>

            <br />
          </div>
        </div>

        <div>
          <div class="d-flex align-items-end">
            <CustomToolTip
              :customInputData="[
                {
                  data: false,
                  text:
                    'Make your payment with paypal. Please use your Order ID as the payment reference.',
                },
              ]"
              v-bind:show="true"
            >
              <span>
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  id="Paypal1"
                  value="Paypal"
                  v-model="paymentType"
                />
              </span>
              <!-- <span class="ml-2">Paypal</span> -->
              <label for="Paypal1" class="ml-2">Paypal</label>

              <span class="theme ml-2">
                <img src="/Image/checkout/PayPalLogo.png" />
              </span>
              <span class="ml-2 small">
                <a href="#" class="grey">What is Paypal?</a>
              </span>
            </CustomToolTip>

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
      <!-- <button
        type="submit"
        class="btn btnTheme white col-lg-auto text-uppercase text-bold"
        v-bind:disabled="
          !shippingDataValid ||
          !acceptTerms ||
          !isUserLoggedIn ||
          !shoppingCart.length > 0
        "
        v-on:click.prevent="
          submitOrder();
          scrollToTop();
        "
      >
        Place order
      </button> -->
      <!-- <p>{{ shippingDataValid }} {{ acceptTerms }} {{ isUserLoggedIn }}</p> -->
    </div>

    <div class="container">
      <div class="row">
        <!-- <div class="col-12"> -->
        <!-- test -->
        <CustomToolTip
        class="col-12"
          :customInputData="[
            { data: shippingDataValid, text: 'Billing details not complete.' },
            { data: acceptTerms, text: 'You must accept Terms.' },
            { data: isUserLoggedIn, text: 'You must Log In.' },
          ]"
          v-bind:show="
            !shippingDataValid ||
            !acceptTerms ||
            !isUserLoggedIn ||
            !shoppingCart.length > 0
          "
        >
          <button
            type="submit"
            class="btn btnTheme white text-uppercase text-bold col-12"
            v-bind:disabled="
              !shippingDataValid ||
              !acceptTerms ||
              !isUserLoggedIn ||
              !shoppingCart.length > 0
            "
            v-on:click.prevent="
              submitOrder();
              scrollToTop();
            "
          >
            Place order
          </button>
        </CustomToolTip>

        <!-- test end -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import ShippingOptions from "../ReusableComponents/ShippingOptions";
import CustomToolTip from "../ReusableComponents/CustomToolTip";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckoutOrder",
  components: {
    ShippingOptions,
    CustomToolTip,
  },
  data() {
    return {
      paymentType: "Direct bank transfer",
      acceptTerms: false,
      submitted: false,
      message: "",
    };
  },

  methods: {
    ...mapActions(["createNewOrder", "clearAllCartItem", "clearShippingData"]),

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    async submitOrder() {
      // skapar ett objekt med data om användare, valda produkter och leverans data
      const newOrder = {
        userId: this.user.id,
        userData: this.user,
        shippingData: this.shippingData,
        orderItems: this.shoppingCart,
        orderTotalAmount: this.shoppingCartTotal,
        paymentType: this.paymentType,
        shippingType: this.getShippingData,
      };

      // test
      // console.log(newOrder)
      //

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
      "getShippingData",
      "getShippingCost",
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