<template>
      <div class="container">
      <div class="text-center pt-5 pb-3 mb-3">
        <h1 class="font-weight-bold">TOP <h1 class="theme d-none font-weight-bold d-md-inline-block"> SELLERS </h1><h1 class="theme d-md-none font-weight-bold d-inline-block"> SELLER </h1></h1>
        <div class="d-flex justify-content-center my-2">
            <hr class="zigzag">
        </div>
        <span class="d-none d-md-block">Check out our weekly top sellers in all category</span>
        <span class="d-md-none">Check out our weekly top seller in all category</span>
      </div>
      <div class="row col-12 row-height px-0 mx-0">
        <div class="col-12 col-md-6 h-100 px-0">
          <ProductCard v-if="products.data[2]" class="h-100 w-100" :showBrand="true" :product="products.data[12]"/>
        </div>
        <div class="col-md-6 d-none d-md-flex justify-content-between flex-column h-100 px-0">
            <ProductCard v-if="products.data[6]" class="h-50 w-100" :showBrand="true" :product="products.data[1]"/>
            <ProductCard v-if="products.data[1]" class="h-50 w-100" :showBrand="true" :product="products.data[21]"/>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from '@/components/Product/ProductCard.vue'

export default {
    name: "TopSellers",
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters(['products']),
    }
    }
</script>

<style scoped>
.row-height {
    height: 500px;
}

@media only screen and (min-width: 992px) {
    .row-height {
        height: 700px;
    }
} 

</style>