<template>
  <div class="container pt-5">
      <form class="needs-validation" novalidate>
        <div class="row">
          <!-- Col 1 -->
          <div class="col">
            <!-- inte inloggad -->
            <div v-if="!isUserLoggedIn">
              <p>
                <!-- Returning customer? -->
                <strong class="pr-2">Please login to checkout</strong>

                <router-link to="/account" class="theme"
                  >Click here to login</router-link
                >
              </p>
            </div>

            <p class="mb-3">
              Have a coupon?
              <!-- <a href="#" class="theme">Click here to enter your code</a> -->
              <a
                class="theme togggleCoupon"
                v-on:click.prevent="toggleShowCoupon"
                >Click here to enter your code</a
              >
            </p>
            <!-- <p>{{ toggleCoupon }}</p> -->

            <div v-show="toggleCoupon">
              <div class="mt-3 mb-3">
                <CheckoutCupon />
              </div>
            </div>

            <div class="mt-5">
              <CheckoutShippingDetails />
            </div>

          </div>

          <!-- Col 2 -->
          <div class="col">
            <div class="card">
              <div class="card-header bgDarkBlue text-center theme f-24 py-1">
                <span class="text-uppercase f24">Your order</span>
              </div>

              <div class="card-body">
                <CheckoutOrder />
                <!-- <CheckoutPlaceorder /> -->
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

// import CheckoutBreadcrumb from "@/components/Checkout/CheckoutBreadcrumb.vue";
// import CheckoutCupon from "@/components/Checkout/CheckoutCupon.vue";
import CheckoutCupon from "@/components/ReusableComponents/ApplyCouponComponent.vue";

import CheckoutShippingDetails from "@/components/Checkout/CheckoutShippingDetails.vue";
import CheckoutOrder from "@/components/Checkout/CheckoutOrder.vue";
// import CheckoutPlaceorder from "@/components/Checkout/CheckoutPlaceorder.vue";

export default {
  name: "CheckoutForm",
  components: {
    // CheckoutBreadcrumb,
    CheckoutCupon,
    CheckoutShippingDetails,
    CheckoutOrder,
    // CheckoutPlaceorder,
  },

  data() {
    return {
      toggleCoupon: false,
      message: "",
    };
  },
  methods: {
    toggleShowCoupon() {
      this.toggleCoupon = !this.toggleCoupon;
    },
  },

  computed: {
    ...mapGetters(["isUserLoggedIn", "user"]),
  },
};
</script>

<style scoped>
.togggleCoupon {
  cursor: pointer;
  text-decoration: none;
}
</style>