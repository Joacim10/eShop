<template>
  <div class="container">
    <!-- för varje order visas ett card när man klickar på en order visas detaljer -->
    <div class="row">
      <div class="col">
        <!-- lista upp ordrar -->
        <div v-if="orders.data.count > 0">
          <!--  -->
          <div
            v-for="order in orders.data.data"
            v-bind:key="order._id"
            v-bind:order="order"
          >
            <div class="card mb-2 p-2">
              <div class="row">
                <div class="col-12  col-lg-4">
                  <p class="f-24">
                    Order: <span class="f-18">{{ order._id }}</span>
                  </p>
                  <p class="f-18">
                    Number of Products: {{ order.orderItems.length }}
                  </p>
                  <p class="f-18">
                    Total order value: ${{ order.orderTotalAmount }}
                  </p>
                  <p class="f-18">
                    Paymenttype: {{ order.paymentType }}
                  </p>
                  <p class="f-18">
                    Shippingtype: {{ order.shippingType }}
                  </p>
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col-12">
                      <OrderCardContent
                        :orderItems="order.orderItems"
                      ></OrderCardContent>
                    </div>
                    <div class="col-12">
                      <OrderShippingDetails
                        :orderData="order.shippingData"
                      ></OrderShippingDetails>
                    </div>
                  </div>
                </div>
              </div>

              <!-- -->

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
import OrderShippingDetails from '../Order/OrderShippingDetails.vue';

export default {
  name: "OrderCard",

  data() {
    return {
      showDetails: false,
    };
  },

  components: {
    OrderCardContent,
    OrderShippingDetails,
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