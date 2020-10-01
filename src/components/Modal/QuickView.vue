<template>

  <div class="">
    
    <div class="container">
     

      <div class="row pt-1 pb-1">
        <!-- Left col -->
        <div class="col-12 col-lg-6"> 
         <ProductImage :id='product._id' />
        </div>
        <!-- Right col -->
        <div class="col-12 col-lg-6">
           <div class="d-flex justify-content-between align-items-center pt-3">
          <div class="d-flex">
           
                  <span class="d-flex mr-2">
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="far fa-star theme"></i>
                  </span>
         
            <span class="d-none d-md-block d-md-flex mr-2">1 customer review</span>
           </div>
          <span class="d-flex"><img class="img-fluid"  :src="'/Image/Brand/' + product.brand + '.png' " /> </span>
           </div>


         <ProductShop :id='product._id' />
        </div>  
      </div>

  </div>

</div>

</template>

<script>

import ProductImage from "@/components/ProductDetails/ProductImage.vue";
import ProductShop from "@/components/ProductDetails/ProductShop.vue";

export default {
    props: ['product'],

     components: {
     ProductImage,
    ProductShop,   
  },


};

</script>


<style>

</style>