<template>
  <div class="pb-5">
    <ShoppingCartBread />

    <!-- här visas children som finns i routes(index.js) -->
    <!-- <router-view></router-view> -->

    <div v-if="!orderCreatedOk">
      <CheckoutForm />
    </div>
    <div v-else>
      <CheckoutOrderOk />
    </div>

    <!--  -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ShoppingCartBread from "../components/BreadCrumbs/ShoppingCartBread";
import CheckoutForm from "../components/Checkout/CheckoutForm.vue";
import CheckoutOrderOk from "../components/Checkout/CheckoutOrderOk.vue";

export default {
  name: "Checkout",
  components: {
    ShoppingCartBread,
    CheckoutForm,
    CheckoutOrderOk,
  },

  data() {
    return {};
  },
  methods: {},

  computed: {
    ...mapGetters(["orderCreatedOk"]),
  },
};
</script>

<style scoped>
</style>

