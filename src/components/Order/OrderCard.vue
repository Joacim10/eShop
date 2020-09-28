<template>
  <div class="container">
    <!-- för varje order visas ett card när man klickar på en order visas detaljer -->
    <div class="row">
      <div class="col">
        <!-- lista upp ordrar -->
        <div v-if="orders">
          <!--  -->
          <div
            v-for="order in orders.data.data"
            v-bind:key="order._id"
            v-bind:order="order"
          >
            <div class="card mb-2 p-2">
              <p class="f-24">
                Order: <span class="f-18">{{ order._id }}</span>
              </p>
              <p class="f-18">Items: {{ order.orderItems.length }}</p>
              <p class="f-18">
                Total order value: {{ order.orderTotalAmount }}
              </p>

              <!-- -->
                <OrderCardContent :orderItems="order.orderItems"></OrderCardContent>
              <!-- -->
              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import OrderCardContent from "../Order/OrderCardContent.vue";

export default {
  name: "OrderCard",

  data() {
    return {
      showDetails: false,
    };
  },

  components: {
    OrderCardContent,
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