<template>
  <div class="" >

   <ProductDetailsBreadcrumb />  

    <div class="container">

    <!-- Product Details -->

    <div class="row pt-5 pb-3">

      <!-- Left col -->
      <div class="col-12 col-lg-6"> 
         <ProductImage /> 
      </div>

      <!-- Right col -->
      <div class="col-12 col-lg-6">
         <ProductShop />
      </div> 
 
    </div>

<div class="row pt-5 pb-3">
 <ProductDetalsNavTabs/>
</div>


</div>
         
<!-- <ImageTest/> -->

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ProductDetailsBreadcrumb from "@/components/ProductDetails/ProductDetailsBreadcrumb.vue";
import ProductImage from "@/components/ProductDetails/ProductImage.vue";
 import ProductShop from "@/components/ProductDetails/ProductShop.vue";
 import ProductDetalsNavTabs from "@/components/ProductDetails/ProductDetalsNavTabs.vue";
//  import ImageTest from "@/components/ProductDetails/ImageTest.vue";
 

export default {
  name: "ProductDetails",
   props: ['id'],

  components: {
     ProductDetailsBreadcrumb,
    ProductImage,
     ProductShop,
     ProductDetalsNavTabs,
    //  ImageTest
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