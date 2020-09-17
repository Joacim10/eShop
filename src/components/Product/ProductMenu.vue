<template>
    <div>
        <i class="my-2 px-2 fas fa-circle text-danger"></i>
        <i class="my-2 px-2 fas fa-heart"></i>
        <i class="my-2 px-2 fas fa-random"></i>
        <i class="my-2 px-2 fas fa-search"></i>
        <i v-on:click="addProductToCart({product, quantity})" class="my-2 px-2 fas fa-shopping-cart"></i>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'ProductMenu',
    props: ['product'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['addProductToCart'])
    }
}
</script>

<style scoped>
    i {
        font-size: 0.8rem;
        color: var(--grey)
    }

    i:hover {
        color: var(--theme)
    }
</style>