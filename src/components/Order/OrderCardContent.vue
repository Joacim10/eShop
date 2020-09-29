<template>
  <div>
    <button
      class="btn themeBg text-white px-3 btnRadius btnCollapse"
      v-on:click.prevent="toggleShowDetails"
    >
      SHOW DETAILS
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
            <p>Category: {{ item.product.category }}</p>
            <p>Name: {{ item.product.name }}</p>
            <p>Description: {{ item.product.description }}</p>
          </div>
          <div class="ml-auto mr-2">
            <p>Price: ${{ item.product.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
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
      // console.log(this)
      // console.log("klick");
      this.showDetails = !this.showDetails;
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