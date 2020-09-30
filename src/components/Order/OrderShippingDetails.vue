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
            <p class="font-weight-bold">StreetAddress: <span class="font-weight-normal">{{ orderData.streetAddress }}</span>  </p>
            <p class="font-weight-bold">ZipCode: <span class="font-weight-normal">{{ orderData.zipCode }}</span>  </p>
            <p class="font-weight-bold">City: <span class="font-weight-normal">{{ orderData.city }}</span>  </p>
            <p class="font-weight-bold">Country: <span class="font-weight-normal">{{ orderData.country }}</span>  </p>            
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