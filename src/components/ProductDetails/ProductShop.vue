<template>
  <div class="" v-if="product">

    <div class="border-bottom">
      <h5 class="f-24 font-weight-bold theme pt-4">{{ product.name }}</h5>
      <p>{{ product.shortdesc }}</p>
    </div>

    <div>

    <div class="pt-3 ">
      <div class="d-flex  align-items-baseline">

        <span class="d-flex f-24 font-weight-bold theme pr-3" v-if="product.discount === 0" >
          {{ product.currency }}{{ product.price }}
        </span> 
        
        <span class="d-flex align-items-baseline" v-else>
          <span class="d-flex f-24 font-weight-bold theme pr-3">{{ product.currency }}{{ newPrice }}</span> 
          <span class=" d-flex pr-3 grey"><s>{{ product.currency }}{{ product.price }} </s></span>        
        </span>


        <span class="small d-flex align-items-baseline ">
          <img src="/Image/ProductDetails/InStock.png" class="d-flex mr-1"> In stock
        </span>

      </div>
    </div>

     <div class="pt-4">
       
        <div class="d-flex  align-items-baseline">

        <span id="cartDetails" class="mr-2 d-flex"  v-if="itemCount >= 1">             
            <button class="btnWhite border rounded px-2"  v-on:click.stop="decreaseQuantity(product); getProductItemQuantity();">-</button>           
             <span class="border bgWhite px-2 py-1 ">{{itemCount}}</span>
            <button class="btnWhite border px-2 rounded" v-on:click.stop="increaseQuantity(product); getProductItemQuantity();" >+</button>
        </span>
        
 
         <!-- <span id="cartDetails" class="d-flex"  v-else> </span> -->
        
         <span class="mr-2  d-flex">           
             <button class="btn btnTheme white text-nowrap " v-on:click.stop="addProductToCart({product, quantity }); getProductItemQuantity();" ><img src="/Image/ProductDetails/cart.png"> Add to cart</button>
         </span>
 
        
          <span id="Choices" class="mr-2  d-flex">    

              <span class="tip tip2 mr-2"><img src="/Image/ProductDetails/Choices/color_round.png" >
                <span class="tiptext tiptext2"><i v-for="(color, index) in product.colors" :key="index" class="fas fa-circle pr-1"  :style="{'color': color}" ></i> </span>         
              </span>

              <span class="tip mr-2"><img src="/Image/ProductDetails/Choices/compare_round.png" v-on:click="addProductToCompare(product)">
                <span class="tiptext" >Compare</span>         
              </span>

             <span class="tip mr-2"><img src="/Image/ProductDetails/Choices/heart_round.png" v-on:click="addProductToWishlist(product)" >
                <span class="tiptext" >Add to wishlist</span>         
              </span>

          </span>
         
    
        </div>
      </div>


     <div class="pt-4 d-flex">  
       <span>   
          <span class="mr-2">Category:</span><span class="theme">{{ product.category }}</span>   
        </span>          
     </div>

      <div class="pt-4 d-flex"> 
        <span><span class="mr-2">Tags: </span> 
          <span class="border p-1 mr-3 ml" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
        </span>                  
      </div>
      
      <div class="d-flex pt-4">
          <span class="d-flex mr-2">Share:</span>  
          <span class="d-flex mr-2"><img src="/Image/ProductDetails/share/fb_round.png"></span>
          <span class="d-flex mr-2"><img src="/Image/ProductDetails/share/twitter_round.png"></span>
          <span class="d-flex mr-2"><img src="/Image/ProductDetails/share/pinterest_round.png"></span>
          <span class="d-flex mr-2"><img src="/Image/ProductDetails/share/linkedin_round.png"></span>
          <span class="d-flex mr-2"><img src="/Image/ProductDetails/share/mail_round.png"></span>       
      </div>

    </div> 


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  name: "ProductShop",
  
  props: ['id', 'product'],

  components: {},

  data() {
    return {
      itemCount: 0,
      quantity: 1,
      newPrice: Number
    };

    
  },

  methods: {
    ...mapActions(['getProductById', 'addProductToCart', 'addProductToWishlist', 'increaseQuantity', 'decreaseQuantity', 'deleteProductFromCart', 'addProductToCompare']),

    getProductItemQuantity() {
      let item = this.shoppingCart.find(item => item.product._id == this.id )

      if(item) {
         this.itemCount = item.quantity;   
      }
    },

 },
  created() {
    this.getProductItemQuantity()
  },

  updated: function (){
    this.getProductItemQuantity()
    this.newPrice = this.product.price - (this.product.price  * (this.product.discount/100))
    //console.log('UPDATED')
  },

  computed: {
    ...mapGetters(['shoppingCart', 'cart'])
  },

  mounted: function() {
   this.newPrice = this.product.price - (this.product.price  * (this.product.discount/100))
    }

  
};
</script>

<style scoped>

#cartDetails:hover {
  cursor: pointer;
} 

#cartDetails .remove:hover {
  background-color: var(--hot);
  color: var(--white);
} 

#Choices img:hover {
  cursor: pointer;
} 

/* Tooltip */ 

  #Choices .tip {
    position: relative;
    display: inline-block;  
  } 
    
 .tip .tiptext {
  visibility: hidden;
  width: 100px;
  background-color: var(--darkBlue) ;
  color: var(--white) ;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -45px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.8rem;
 }


  .tip .tiptext::after {
  content: "";
  position: absolute;
  top: 135%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent var(--darkBlue)  transparent  transparent;
  /* transform-origin: 0 0;
  transform: rotate(270deg);  */
 }
    
 .tip:hover .tiptext {
    visibility: visible !important;
    opacity: 1;
  }


 .tip2 .tiptext2 { 
  background-color: #f0eeee !important ;
  color: var(--darkBlue) !important;
 }


 .tip2 .tiptext2::after {
   border-color: transparent #f0eeee  transparent  transparent !important;
 }
    
 .tip2:hover .tiptext2 {
    visibility: visible !important;
    opacity: 1;
  }


</style>