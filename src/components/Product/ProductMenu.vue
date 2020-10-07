<template>
    <div id="productMenu" v-on:click.stop>

      <!-- Färgplupparna -->
      <div class="tip"><i class="my-2 px-2 fas fa-circle cursorNormal" :style="initialColor"></i>
        <span class="tipcolors tiptext pl-1">
          <i v-for="(color, index) in product.colors" :key="index" class="fas fa-circle pr-1" :style="{'color': color}"></i> 
        </span>
      </div>

      <!-- Wishlist - hjärtat -->
      <div class="tip"> <i v-on:click="toggleWishlist" class="my-2 px-2 fas fa-heart" v-bind:class="{ red: includedInWishList }"></i>
         <span class="tiptext" >Wishlist</span>
      </div>
       
      <!-- Compare -->
      <div class="tip"> <i v-on:click="toggleCompare" class="my-2 px-2 fas fa-random" v-bind:class="{ theme: includedInCompare }"></i>
         <span class="tiptext">Compare</span>
      </div>

      <!-- Quick view -->
      <div class="tip"><i v-on:click="toggleModal({modalType: 'quickView', data: product})" class="my-2 px-2 fas fa-search" ></i>
         <span class="tiptext" >Quick view</span>
      </div>
       
      <!-- Add to cart -->
      <div class="tip"><i v-on:click="addProductToCart({product, quantity})" class="my-2 px-2 fas fa-shopping-cart"></i>
         <span class="tiptext" >Add to cart</span>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductMenu",
  props: ["product"],
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    ...mapActions(['addProductToCart', 'addProductToWishlist', 'toggleModal', 'addProductToCompare', 'deleteProductFromWishlist', 'deleteProductFromCompare']),
    toggleWishlist () {
      if (!this.wishlist.includes(this.product)) {
        this.addProductToWishlist(this.product)
      } else {
        this.deleteProductFromWishlist(this.product._id)
      }
    },
    toggleCompare () {
      if (!this.compare.includes(this.product)) {
        this.addProductToCompare(this.product)
      } else {
        this.deleteProductFromCompare(this.product._id)
      }
    }
  },
  computed: {
    ...mapGetters(['compare', 'wishlist']),
    includedInCompare () {
      if (this.compare !== undefined) {
        return this.compare.includes(this.product)
      } else {
        return false
      }
    },
    includedInWishList () {
      if (this.wishlist !== undefined) {
        return this.wishlist.includes(this.product)
      } else {
        return false
      }
    },
    initialColor () {
      let color = '#0000'
      if (this.product.colors) {
        color = this.product.colors[0]
      }
      return {
        "color": `${color}`,
      }; 
    }
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


.fa-circle::before{
  text-shadow: 1px 1px 6px #000000a3;
}

.red {
  color: red !important;
}

</style>