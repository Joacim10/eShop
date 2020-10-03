<template>
  <div class="" >

    <ProductBread :category='product.category' :name='product.name' :id='id' :product='product'  />

    <div class="container">

    <!-- Product Details -->

    <div class="row pt-5 pb-3">

      <!-- Left col -->
      <div class="col-12 col-lg-6"> 
         <ProductImage :id='id' :product='product' :image='product.image' /> 
      </div>

      <!-- Right col -->
      <div class="col-12 col-lg-6">
         <ProductShop :id='id' :product='product' />
      </div> 
 
    </div>

<div class="row pt-5 pb-3">
 <ProductDetalsNavTabs :id='id' :product='product' />
</div>

</div> <!-- end of pD container -->
         
<!-- gröna rutor -->
<div class="bgMediumBlue pt-1 pb-1">
  <Box/>
</div>

<div class="container pt-4 ">

<!-- you may also like -->
     
      <div class="text-center pt-5">
        <h1 class="font-weight-bold f-play text-uppercase">YOU MAY <h1 class="theme font-weight-bold d-inline-block f-play text-uppercase">ALSO LIKE </h1></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        
      </div>
      <Carousel class="d-sm-none heightCarousel" :windowSize="1" :badgetype="['New']" />
      <Carousel class="d-none d-sm-block d-md-none heightCarousel"  :windowSize="3" :badgetype="['New']" />
      <Carousel class="d-none d-md-block heightCarousel"  :windowSize="4" :badgetype="['New']"/>
      
    

<!-- related products -->

      <div class="text-center pt-5">
        <h1 class="font-weight-bold f-play text-uppercase">Related <h1 class="theme font-weight-bold d-inline-block f-play text-uppercase">products </h1></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        
      </div>
      <Carousel class="d-sm-none heightCarousel" :windowSize="1" :badgetype="['Hot', 'Discount']" />
      <Carousel class="d-none d-sm-block d-md-none heightCarousel"  :windowSize="3" :badgetype="['Hot', 'Discount']" />
      <Carousel class="d-none d-md-block heightCarousel"  :windowSize="4" :badgetype="['Hot', 'Discount']"/>
      
</div>

<!-- subscribe now -->
<div class="pb-5 pb-md-0">
<SubscribeNow />
</div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ProductBread from '../components/BreadCrumbs/ProductBread'
import ProductImage from "@/components/ProductDetails/ProductImage.vue";
import ProductShop from "@/components/ProductDetails/ProductShop.vue";
import ProductDetalsNavTabs from "@/components/ProductDetails/ProductDetalsNavTabs.vue";

import Box from "@/components/Homepage/Box.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import SubscribeNow from "@/components/Homepage/SubscribeNow.vue"

export default {
  name: "ProductDetails",

  props: ['id'],

  components: {
     ProductBread,
     ProductImage,
     ProductShop,
     ProductDetalsNavTabs,
     Box,
     Carousel,
     SubscribeNow
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