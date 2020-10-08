<template>
  <div class="container">
    <div v-if=" orders !== null ">
      <h5 class="mt-2">You have {{ orders.data.count }} orders</h5>
      <!--  -->
      <div class="row">
        <div class="col">
          <div v-if="orders.data.count > 0">
            <OrderCard />
          </div>
          <div v-else>
            <!-- <h5>You have no orders</h5> -->
            <router-link to="/products">
              <button class="mt-3 py-2 btn btnTheme text-white">
                GO TO SHOP
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!---->

    <!--  -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import OrderCard from "../Order/OrderCard.vue";

export default {
  name: "UserOrders",

  components: {
    OrderCard,
  },

  methods: {
    ...mapActions(["getOrdersByCustomer"]),
  },
  created() {
    this.getOrdersByCustomer(this.user.id);
  },
  computed: {
    ...mapGetters(["orders", "user"]),
  },
};
</script>

<style>
</style>