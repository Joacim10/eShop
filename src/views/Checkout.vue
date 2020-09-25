<template>
  <div class="pb-5">
    <CheckoutBreadcrumb />

    <!-- här visas children -->
    <router-view></router-view>
    <!--  -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

import CheckoutBreadcrumb from "@/components/Checkout/CheckoutBreadcrumb.vue";
// import CheckoutCupon from "@/components/Checkout/CheckoutCupon.vue";
// import CheckoutCupon from "@/components/ReusableComponents/ApplyCouponComponent.vue";

// import CheckoutForm from "@/components/Checkout/CheckoutForm.vue";
// import CheckoutOrder from "@/components/Checkout/CheckoutOrder.vue";
// import CheckoutPlaceorder from "@/components/Checkout/CheckoutPlaceorder.vue";

export default {
  name: "Checkout",
  components: {
    CheckoutBreadcrumb,
    // CheckoutCupon,
    // CheckoutForm,
    // CheckoutOrder,
    // CheckoutPlaceorder,
  },

  data() {
    return {};
  },
  methods: {},

  computed: {},
};
</script>

<style scoped>
</style>

