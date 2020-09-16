<template>
  <div class="container">
    <h1>Shop</h1>
  </div>
</template>

<script>

// hämtar "funktioner från store"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Shop",
  components: {

  },

  methods:{
    ...mapActions(['getAllProducts','getProductById', 'addProductToCart'])
    // ...mapActions(['getProductById', 'addProductToCart'])
  },
  created(){
    this.getAllProducts();
  },
  computed:{
    ...mapGetters(['products'])
  }

};
</script>