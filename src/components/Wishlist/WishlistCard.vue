<template>
<div class="row row-cols-3">
    <div v-for="wishlistItem in wishlist" :key="wishlistItem._id" :wishlistItem="wishlistItem">
        <div class="cursorPointer border">
            <i v-on:click.stop="deleteProductFromWishlist(wishlistItem._id)" class="ml-3 fas fa-times grey pt-2 pb-2"><span class="ml-2 f-16 font-weight-light">Remove item</span></i>
        </div>
        <div class="productList flex-wrap">
            <ProductCard class="col-6 col-md-12 px-1 px-lg-6" :product="wishlistItem"/>
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
.border{
    border-radius: 5px 5px 0 0;
    margin-left: 0.23vw;
    margin-right: 0.2vw;
}

.productList{
    width: 100%;
    display: flex;
    justify-content: between;
    overflow: hidden;
}

.productList div{
    height: 220px;
    margin-bottom: 20px;
    text-align: left;
}

@media (min-width: 576px) { 
    .productList div{
        height: 245px;
    }
}

@media (min-width: 768px) {  
    .productList div{
        height: 245px;
    }
}

@media (min-width: 992px) {  
    .productList div{
        height: 272px;
    }
}

@media (min-width: 1200px) {  
    .productList div{
        height: 350px;
    }
}
</style>