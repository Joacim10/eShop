<template>
  <div>
    

    <div class="container pt-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-6">
          <div class="text-center">
            <i class="fas fa-shipping-fast fa-3x"></i>
            <h4>Your order has been submitted</h4>
            <p>you will recieve a email about your order and delivery</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <router-link to="/products">
          <button class="mt-3 py-2 btn btnTheme text-white">SHOP MORE</button>
        </router-link>
      </div>
    </div>
    <Box class="m-0 pl-2 pr-2 overflow-hidden" />
  </div>
</template>

<script>
import Box from "@/components/Homepage/Box.vue";

export default {
  name: "CheckoutOrderOk",
  components: {
    Box,
  },
};
</script>

<style>
</style>