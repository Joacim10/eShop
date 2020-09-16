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
    ...mapActions(['getAllProducts'])
  },
  created(){
    this.getAllProducts();
  },
  computed:{
    ...mapGetters(['products'])
  }

};
</script>