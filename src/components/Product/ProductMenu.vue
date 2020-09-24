<template>
  
    <div id="productMenu">

      <!-- Färgplupparna -->
      <div class="tip"><i class="my-2 px-2 fas fa-circle text-danger"></i>
         <span class="tipcolors tiptext"><i class="fas fa-circle green"></i> <i class="fas fa-circle purple"></i> <i class="fas fa-circle red"></i> <i class="fas fa-circle black"></i></span>
      </div>

      <!-- Wishlist - hjärtat -->
      <div class="tip"> <i v-on:click="addProductToWishlist(product)" class="my-2 px-2 fas fa-heart"></i>
         <span class="tiptext" >Wishlist</span>
      </div>
       
      <!-- Random - Behövs detta? -->
      <div class="tip">  <i class="my-2 px-2 fas fa-random"></i>
         <span class="tiptext">Random</span>
      </div>
       
      <!-- Quick view -->
      <div class="tip"><i class="my-2 px-2 fas fa-search"></i>
         <span class="tiptext" >Quick view</span>
      </div>
       
      <!-- Add to cart -->
      <div class="tip"><i v-on:click="addProductToCart({product, quantity})" class="my-2 px-2 fas fa-shopping-cart"></i>
         <span class="tiptext" >Add to cart</span>
      </div>
    
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductMenu",
  props: ["product"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    // ...mapActions(["addProductToCart"]),
    ...mapActions(['addProductToCart', 'addProductToWishlist']),
  
  },
};
</script>



<style>

/* kör utan scoped */

#productMenu i {
  font-size: 0.8rem;
  color: var(--grey);
}

#productMenu i:hover {
  color: var(--theme);
  cursor: pointer;
} 

/* Tooltip */ 

  #productMenu .tip {
    position: relative;
    display: inline-block;  
  } 
    
 .tip .tiptext {
  visibility: hidden;
  width: 90px;
  background-color: var(--theme) ;
  color: var(--white) ;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -4%;
  left: -110%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.8rem;
 }


  .tip .tiptext::after {
   content: "";
  position: absolute;
  top: 70%;
  left: 104%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--theme) transparent transparent transparent;
  transform-origin: 0 0;
  transform: rotate(270deg); 
 }
    
 .tip:hover .tiptext {
    visibility: visible !important;
    opacity: 1;
  }


/* Färgerna */

#productMenu .tip .tipcolors {
   background-color: #f0eeee !important;
}

 .tip .tipcolors::after {
  border-color:  #f0eeee transparent transparent transparent  !important;
} 

#productMenu .tipcolors i {
 text-decoration: none;
} 


#productMenu .green {
  color: #82d8c6 !important;
}
#productMenu .purple {
  color: #ca82d8 !important;
}
#productMenu .red {
  color: #fe6c6c !important;
}

#productMenu .black {
  color: #333333 !important;
} 


</style>