<template>
<div>
  <WishlistBread />
  <div v-if="wishlist.length === 0" class="text-center my-4">
    <h1 class="theme sizeMobile"> WISHLIST IS EMPTY </h1>
    <router-link to="/products"> <button class=" mt-3 py-2 btn btnTheme text-white">CHECK OUT OUR PRODUCTS</button> </router-link>  
  </div>
  <div v-else class="container pl-0 pr-0 mtHome">
    <h1 class="row font-weight-bold d-flex justify-content-center">YOUR PRODUCTS<span class="theme ml-2">WISHLIST</span></h1>
    <div class="d-flex justify-content-center mb-3">
        <hr class="zigzag">
    </div>
    <WishlistCard />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import WishlistCard from "@/components/Wishlist/WishlistCard.vue";
import WishlistBread from '../components/BreadCrumbs/WishlistBread'
export default {
  name: "Wishlist",
  components: {
    WishlistBread,
    WishlistCard
  },
  computed: {
    ...mapGetters(["wishlist"])
  },
};
</script>

<style scoped>
.mtHome{
  margin-top: 5rem;
}
</style>