<template>
<div>
  <WishlistBread />
  <div class="container pl-0 pr-0 mtHome">
    <h1 class="row font-weight-bold d-flex justify-content-center">YOUR PRODUCTS<span class="theme ml-2">WISHLIST</span></h1>
    <div class="d-flex justify-content-center mb-3">
        <hr class="zigzag">
    </div>
    <WishlistCard />
  </div>
</div>
</template>

<script>

import WishlistCard from "@/components/Wishlist/WishlistCard.vue";
import WishlistBread from '../components/BreadCrumbs/WishlistBread'
export default {
  name: "Wishlist",
  components: {
    WishlistBread,
    WishlistCard
    },
};
</script>

<style scoped>
.mtHome{
  margin-top: 5rem;
}
</style>