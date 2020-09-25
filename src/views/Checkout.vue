<template>
  <div class="pb-5">
    <CheckoutBreadcrumb />

    <!-- här visas children som finns i routes(index.js) -->
    <router-view></router-view>
    <!--  -->
  </div>
</template>

<script>

import CheckoutBreadcrumb from "@/components/Checkout/CheckoutBreadcrumb.vue";

export default {
  name: "Checkout",
  components: {
    CheckoutBreadcrumb,
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

