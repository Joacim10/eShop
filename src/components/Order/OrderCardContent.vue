<template>
  <div>
    <button
      class="btn themeBg text-white px-3 btnRadius btnCollapse"
      v-on:click.prevent="toggleShowDetails"
    >
      SHOW DETAILS
    </button>

    <div v-show="showDetails">
      <div v-for="(item, index) in orderItems" :key="index" class="d-flex">
        <!-- <p>varje produkt i ordern visas här</p> -->
        <img class="image-width" :src="item.product.image" alt="produkt bild" />
        <div>
          <p>{{ item.product.name }}</p>
          <p>{{ item.product.shortdesc }}</p>
        </div>
        <div class="ml-auto mr-2">
          <p>Pris: {{ item.product.price }}</p>
          <p>Antal: {{ item.quantity }}</p>
        </div>
        <!-- <hr> -->
      </div>
    </div>

    <hr />
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
</style>