<template>
    <div class="productList flex-wrap">
        <ProductCard class="col-6 col-md-4 px-1 px-lg-2" v-for="(product, index) in products" :key="index" :product="product"/>
    </div> 
</template>

<script>
import ProductCard from "@/components/Product/ProductCard.vue"

export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    props: ['products']
}
</script>

<style scoped>

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
            height: 300px;
        }
    }

</style>