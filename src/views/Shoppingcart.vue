<template>
  <div>
 
    
  <div class="container mt-5">

    <div class="row">
      <div class="col-12 col-lg-8 py-0">
        
        <div class="d-flex justify-content-between font-weight-bold">
          <div class="ml-5">
            <span>Products</span>
          </div>


            <div class="d-flex col-6">
          <div class="mr-5">
            <span>Price</span>
          </div>
          <div class="ml-3">
            <span>Quantity</span>
          </div>
          <div class=" px-5 ml-5">
            <span>Subtotal</span>
          </div>
         </div>

        </div>

        <hr class="mb-0 mt-0 themeBg">
        <!--ShoppingCart Items--->
       
          <ShoppingCartItems  />

      </div>

      <!-- TOTALCART-->
      <div class="col-12 col-lg-4">
        <ShoppingCartTotal />
      </div>
    </div>
        <div class="mt-1 col-12 col-lg-5 ">
         <ApplyCouponComponent /> 
         </div>
    
     <div class="container my-4">
      <div class="text-center pt-5">
        <h1 class="font-weight-bold">YOU MAY <h1 class="theme font-weight-bold d-inline-block">ALSO LIKE </h1></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        
      </div>
      <Carousel class="d-sm-none heightCarousel" :windowSize="1" :badgetype="['New']" />
      <Carousel class="d-none d-sm-block d-md-none heightCarousel"  :windowSize="3" :badgetype="['New']" />
      <Carousel class="d-none d-md-block heightCarousel"  :windowSize="4" :badgetype="['New']"/>
      
    </div>

    
    
     
      
      

  </div>
  </div>
</template>

<script>
import ShoppingCartTotal from "../components/ShoppingCart/ShoppingCartTotal";
import ApplyCouponComponent from "../components/ReusableComponents/ApplyCouponComponent";
import ShoppingCartItems from "../components/ShoppingCart/ShoppingCartItems";

import Carousel from "@/components/Carousel/Carousel.vue";




import { mapActions } from 'vuex';

export default {
  name: "Shoppingcart",
  components: {
    ShoppingCartTotal,
    ApplyCouponComponent,
    ShoppingCartItems,
    Carousel,
    
    
 
  },
  props : ["cartItem","cardWidth"],
  methods: {
    ...mapActions(["setShoppingCart"])
  },
  created (){
    this.setShoppingCart ()
  }
};
</script>
<style scoped>


.pxCartBtn {
  padding-right: 50px;
  padding-left: 50px;
}
.bTop {
  border-top: 0px;
}
.borderShopping {
  border-bottom: 2px solid var(--theme);
}
.borderDotted{
  border: 3px dotted lightgray;
}
.mlRandom{
  margin-left: 120px;
}



</style>