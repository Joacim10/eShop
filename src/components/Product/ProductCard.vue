<template>
<div>

    <div class="card-main productBG" >
        <img :src="`${product.image}`" alt="">
        <div class="top-left">
            <div v-if="product.badgetype === 'Discount'" class="f-16 circle text-white p-1 text-center d-none" :class="product.badgetype">-{{product.discount}}%</div>
            <div v-else class="f-16 circle text-white p-1 text-center d-none" :class="product.badgetype">{{product.badgetext}}</div>
       </div>

        <div class="card-original card-body text-white card-carousel--card--footer">
            <p class="f-18" >{{ product.name }}</p>
        </div>
        <div class="card-hover card-body p-1 p-sm-2">

            <ProductMenu :product="product" class="top-right py-2"/>

            <div class="bottom-left text-white">
                <p class="f-16">{{ product.name }}</p>
                <p class="border d-inline-block p-1 mr-1 small text-center f-14" v-for="tag in product.tags" :key="tag">{{ tag }}</p>
                <div v-if="product.discount === 0" class="p-1">
                    <p class="theme f-18 font-weight-bold">{{ product.currency }}{{ product.price }}</p>
                </div>
                <div v-else class="p-1">
                    <p><s>{{ product.currency }}{{ product.price }}</s></p>
                    <p class="theme f-18 font-weight-bold">{{ product.currency }}{{ newPrice }}</p>
                </div>
            </div>
            <div class="bottom-right theme d-none" :class="{ 'd-block' : product.rating > 0}">
                <i v-for="(stars, index) in product.rating" :key="index" class="fas fa-star"></i>
                <i v-for="item in nonFilledStars" :key="'nonFilled'+item" class="far fa-star"></i>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { mapActions } from "vuex";
import ProductMenu from '@/components/Product/ProductMenu.vue'

export default {
    name: 'ProductCard',
    props: ['product'],
    components: {
        ProductMenu
    },
    data() {
        return {
            nonFilledStars: Number,
            newPrice: Number
        }
    },
    methods: {
    ...mapActions(['getProductById', 'addProductToCart'])
    },
    mounted: function() {
        this.nonFilledStars = 5 - (this.product.rating || 0)
        this.newPrice = this.product.price * ((100 - this.product.discount)/100)
    }
}
</script>

<style scoped>

    .top-right {
        position:absolute;
        right: 0px;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: between;
        align-items: center;
        background-color: white;
        border-radius: 20px;
        padding: 5px;
        margin: 12px;
    }

    .top-left {
        position:absolute;
        left: 0px;
        top: 0px;  
        padding: 10px 10px 0;
    }

    .circle {
        border-radius: 50%;
        padding: 5px;
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
        display: flex !important;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }

    .card-main:hover .top-left {
        display: none !important;
    }

    .bottom-left {
        padding: 5px;
        margin: 5px;
        position:absolute;
        bottom: 0px;
        left: 0px;
    }

    .bottom-right {
        padding: 5px;
        margin: 5px;
        position:absolute;
        bottom: 0px;
        right: 0px;
    }

    p {
        margin-bottom: 2px;
    }

    .card-main {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .card-main > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-position: top center;
    }

    .card-body{
        background-color: var(--darkBlue);
        position: absolute;
        z-index: +1;
        padding: 10px;
    }

    .card-original {
        bottom: 0px;
        width: 100%;
    }

    .card-hover {
        transition: bottom 0.3s ease;
        bottom: -100%;
        opacity: 0.9;
        height: 100%;
        width: 100%;
    }

    .card-main:hover > .card-original {
        display: none;
    }

    .card-main:hover > .card-hover {
        bottom: 0;
        display: block !important;
    }

    .New {
        background-color: var(--theme);
        display: flex !important;
        text-transform: uppercase;
    }

    .Hot {
        background-color: var(--hot);  
        display: flex !important;
        text-transform: uppercase;
    }

    .Discount {
        background-color: var(--sale); 
        display: flex !important;
        text-transform: uppercase;
    }



</style>