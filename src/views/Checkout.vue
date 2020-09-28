<template>
  <div class="pb-5">
    <ShoppingCartBread />

    <!-- här visas children som finns i routes(index.js) -->
    <router-view></router-view>
    <!--  -->
  </div>
</template>

<script>
  import ShoppingCartBread from '../components/BreadCrumbs/ShoppingCartBread'


export default {
  name: "Checkout",
  components: {
  ShoppingCartBread,
  },

  data() {
    return {};
  },
  methods: {},

  computed: {},
};
</script>

<style scoped>
</style>

