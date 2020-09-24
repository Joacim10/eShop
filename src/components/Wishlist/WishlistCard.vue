<template>
<div class="row">
    <div  v-for="wishlistItem in wishlist" :key="wishlistItem._id" :wishlistItem="wishlistItem">
        <div>
            <i v-on:click.stop="deleteProductFromWishlist(wishlistItem.product.product._id)" class="ml-3 fas fa-times grey"><span class="ml-2 f-16 font-weight-light">Remove item</span></i>
        </div>
        <div class="sizeWishlist">
            <ProductCard :product="wishlistItem.product.product"/>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/Product/ProductCard.vue'

export default {
    name: 'WishlistCard',
    props: ["wishlistItem"],
    components: {
        ProductCard
    },

    computed: {
        ...mapGetters(["wishlist","product"])
    },

    methods: {
        ...mapActions(["getProductById", "addProductToWishlist", "deleteProductFromWishlist"]),
    },

    mounted: function() {
        this.nonFilledStars = 5 - (this.product.rating || 0)
        this.newPrice = this.product.price * ((100 - this.product.discount)/100)
    }
}
</script>

<style scoped>
.sizeWishlist{
    max-width: 10rem;
    max-height: 10rem;
}
</style>