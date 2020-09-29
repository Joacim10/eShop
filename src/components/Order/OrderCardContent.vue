<template>
  <div>
    <button
      class="btn themeBg text-white px-3 btnRadius btnCollapse mb-2"
      v-on:click.prevent="toggleShowDetails"
    >
      {{ !showDetails ? "SHOW DETAILS" : "HIDE DETAILS" }}
    </button>

    <div v-show="showDetails">
      <div v-for="(item, index) in orderItems" :key="index" class="p-2">
        <div class="d-flex">
          <div class="mr-2">
            <img
              class="image-width img-fluid"
              :src="item.product.image"
              alt="produkt bild"
            />
          </div>

          <div>
            <p class="font-weight-bold">Category: <span class="font-weight-normal">{{ item.product.category }}</span>  </p>
            <p class="font-weight-bold" >Name: <span class="font-weight-normal">{{ item.product.name }}</span> </p>
            <p class="font-weight-bold">Description: <span class="font-weight-normal">{{ item.product.description }}</span></p>
          </div>
          <div class="ml-auto mr-2">
            <p class="font-weight-bold">Price:  <span class="font-weight-normal">${{ item.product.price }}</span></p>
            <p class="font-weight-bold">Quantity: <span class="font-weight-normal">{{ item.quantity }}</span></p>
          </div>
        </div>
        <div class="my-hr"></div>
      </div>
    </div>

    <!-- <hr /> -->
  </div>
</template>

<script>
export default {
  name: "OrderCardContent",
  data() {
    return {
      showDetails: false,
    };
  },
  props: ["Item", "orderItems"],
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