<template>
  <div class="" v-if="product">

  
    <div class="border-bottom">
      <h5 class="f-24 font-weight-bold theme pt-4">{{ product.name }}</h5>
      <p>{{ product.shortdesc }}</p>
    </div>

    <div>

    <div class="pt-3 ">
      <div class="d-flex  align-items-baseline">
        <span class="d-flex f-24 font-weight-bold theme pr-3">{{ product.currency }}{{ product.price }}</span> 
        <span class=" d-flex pr-3 grey"><s>{{ product.currency }}???</s></span> 
        <span class="small d-flex align-items-baseline ">
          <img src="/Image/ProductDetails/InStock.png" class="d-flex mr-1"> In stock
        </span>
      </div>
    </div>

     <div class="pt-4">
        <div class="d-flex  align-items-baseline">

        <!-- v-for="cartItem in shoppingCart" :key="cartItem._id" :cartItem="cartItem" -->
          
              
             
            <!-- <button class="btnWhite border rounded px-2"  v-on:click.stop="decreaseQuantity(cartItem.product)">-</button>
            <span class="border bgWhite px-2 py-1 rounded">{{cartItem.quantity}}</span>
            <button class="btnWhite border px-2 rounded" v-on:click.stop="increaseQuantity(cartItem.product)">+</button>
            <span class="border bgWhite px-2 py-1 rounded remove" v-on:click.stop="deleteProductFromCart(cartItem.product._id)">Remove</span> -->

 <span id="cartDetails" class="mr-3 d-flex"  >
             
            <button class="btnWhite border rounded px-2"  v-on:click.stop="decreaseQuantity(product); getProductItemQuantity();">-</button>
             <span class="border bgWhite px-2 py-1 rounded">{{item.quantity}}</span> 
            <button class="btnWhite border px-2 rounded" v-on:click.stop="increaseQuantity(product); getProductItemQuantity();" >+</button>
            <!-- <span class="border bgWhite px-2 py-1 rounded remove" v-on:click.stop="deleteProductFromCart(cartItem.product._id)">Remove</span> -->
               
         </span>



         <span class="mr-3  d-flex">
             <button class="btn btnTheme white" v-on:click="addProductToCart({product, quantity })" ><img src="/Image/ProductDetails/cart.png"> Add to cart</button>
         </span>
         


          <span id="Choices" class="mr-3  d-flex">
    

              <span class="tip mr-3"><img src="/Image/ProductDetails/Choices/color_round.png">
                <span class="tiptext" >Colors</span>         
              </span>

              <span class="tip mr-3"><img src="/Image/ProductDetails/Choices/compare_round.png">
                <span class="tiptext" >Random</span>         
              </span>

             <span class="tip mr-3"><img src="/Image/ProductDetails/Choices/heart_round.png">
                <span class="tiptext" v-on:click="addProductToWishlist({product})" >Add to wishlist</span>         
              </span>

         </span>
    
  </div>
     </div>


     <div class="pt-4 d-flex">  
       <span>   
           Category: <span class="theme">{{ product.category }}</span>   
        </span>          
     </div>

      <div class="pt-4 d-flex"> 
        <span>Tags: 
          <span class="border p-1 mr-3" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
        </span>       
           
      </div>
          <div class="d-flex pt-4">
            <span class="d-flex mr-3">Share:</span>  
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
  props: ['id'],
  components: {},
  data() {
    return {
      item: {
        id: this.id,
        product: this.product,
        quantity: 0

          },
           quantity: 1,
    };
  },

  methods: {
    ...mapActions(['getProductById', 'addProductToCart', 'addProductToWishlist', 'increaseQuantity', 'decreaseQuantity', 'deleteProductFromCart']),

    getProductItemQuantity() {
      console.log('hej')
       console.log(this.id)
      let item = this.shoppingCart.find(item => item.product[0].id == this.id )
      console.log(item)
      if(item) {
         console.log('hallå')
        this.item = item
      }
    }
 
  
 
 },
  created() {
    console.log('this.id', this.id)
    this.getProductById(this.id)
    this.getProductItemQuantity()
  },
  computed: {
    ...mapGetters(['product', 'shoppingCart', 'cart'])
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


</style>