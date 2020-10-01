<template>
  <div class="" >

    <ProductBread :category='product.category' :name='product.name' :id='id' />

    <div class="container">

    <!-- Product Details -->

    <div class="row pt-5 pb-3">

      <!-- Left col -->
      <div class="col-12 col-lg-6"> 
         <ProductImage :id='id' /> 
      </div>

      <!-- Right col -->
      <div class="col-12 col-lg-6">
         <ProductShop :id='id' />
      </div> 
 
    </div>

<div class="row pt-5 pb-3">
 <ProductDetalsNavTabs :id='id'/>
</div>

</div>
         

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductImage from "@/components/ProductDetails/ProductImage.vue";
import ProductShop from "@/components/ProductDetails/ProductShop.vue";
import ProductDetalsNavTabs from "@/components/ProductDetails/ProductDetalsNavTabs.vue";
import ProductBread from '../components/BreadCrumbs/ProductBread'

export default {
  name: "ProductDetails",
  props: ['id'],
  components: {
     ProductBread,
     ProductImage,
     ProductShop,
     ProductDetalsNavTabs,
  },
  data() {
    return {
       quantity: 1
    };
  },
  methods: {
    ...mapActions(['getProductById', 'addProductToCart'])
  },
  created() {
    this.getProductById(this.id)
  },
  computed: {
    ...mapGetters(['product'])
  }
};
</script>