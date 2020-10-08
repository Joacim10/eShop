<template>
  <div>
    <button
      class="btn themeBg text-white px-3 btnRadius btnCollapse mb-2"
      v-on:click.prevent="toggleShowDetails"
    >
      {{ !showDetails ? "SHOW DELIVERY DET." : "HIDE DELIVERY DET." }}
    </button>

    <div v-show="showDetails">
      <div class="d-flex">
        <div>
          <p class="font-weight-bold">
            StreetAddress:
            <span class="font-weight-normal">{{
              orderData.streetAddress
            }}</span>
          </p>
          <p class="font-weight-bold">
            ZipCode:
            <span class="font-weight-normal">{{ orderData.zipCode }}</span>
          </p>
          <p class="font-weight-bold">
            City: <span class="font-weight-normal">{{ orderData.city }}</span>
          </p>
          <p class="font-weight-bold">
            Country:
            <span class="font-weight-normal">{{ orderData.country }}</span>
          </p>
          <!-- jm -->
          <div v-if="orderData.shipToDifferentAddress">
            <h5>Alter delivery address:</h5>
            <p class="font-weight-bold">
              Recipient:
              <span class="font-weight-normal">{{
                orderData.altShippingrecipient
              }}</span>
            </p>
            <p class="font-weight-bold">
              StreetAddress:
              <span class="font-weight-normal">{{
                orderData.altShippingStreetAddress
              }}</span>
            </p>
            <p class="font-weight-bold">
              ZipCode:
              <span class="font-weight-normal">{{
                orderData.alterZipCode
              }}</span>
            </p>
            <p class="font-weight-bold">
              City:
              <span class="font-weight-normal">{{ orderData.alterCity }}</span>
            </p>
          </div>
          <!-- text -->
          <div v-if="orderData.orderNotes.length > 0">
            <h5>Order notes:</h5>
            <p>{{ orderData.orderNotes }}</p>
          </div>
        </div>
      </div>
      <div class="my-hr"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderShippingDetails",
  data() {
    return {
      showDetails: false,
    };
  },
  props: ["Item", "orderData"],
  methods: {
    toggleShowDetails() {
      //
      this.showDetails = !this.showDetails;
      //
    },
  },
};
</script>

<style scoped>
.image-width {
  max-width: 90px;
}
.my-hr {
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--theme);
}
</style>