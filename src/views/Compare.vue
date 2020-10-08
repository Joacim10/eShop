<template>
<div>
  <CompareBread />
  <div v-if="compare.length === 0" class="text-center my-4">
    <h1 class="theme sizeMobile"> COMPARE IS EMPTY </h1>
    <router-link to="/products"> <button class=" mt-3 py-2 btn btnTheme text-white">CHECK OUT OUR PRODUCTS</button> </router-link>  
  </div>
  <div v-else class="container pl-0 pr-0 mtHome">
    <h1 class="row font-weight-bold d-flex justify-content-center">YOUR PRODUCTS<span class="theme ml-2">COMPARE</span></h1>
    <div class="d-flex justify-content-center mb-3">
        <hr class="zigzag">
    </div>

    <div class="row row-cols-3">
        <div v-for="compareItem in compare" :key="compareItem._id" :compareItem="compareItem">
            <div class="cursorPointer border">
                <i v-on:click.stop="deleteProductFromCompare(compareItem._id)" class="ml-3 fas fa-times grey pt-2 pb-2"><span class="ml-2 f-16 font-weight-light">Remove item</span></i>
            </div>
            <div class="productList flex-wrap">
                <ProductCard class="col-6 col-md-12 px-1 px-lg-6" :product="compareItem"/>
            </div>
        </div>
    </div>
  </div>
</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import CompareBread from '../components/BreadCrumbs/CompareBread'
import ProductCard from '../components/Product/ProductCard'
export default {
  name: "Compare",
  components: {
    CompareBread,
    ProductCard
  },
  computed: {
    ...mapGetters(["compare","product"])
  },
  methods: {
    ...mapActions(["getProductById", "deleteProductFromCompare"]),
  },
};
</script>

<style scoped>
.mtHome{
  margin-top: 5rem;
}

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