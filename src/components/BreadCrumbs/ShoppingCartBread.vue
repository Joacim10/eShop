<template>
  <div class="bread pt-4 pb-3 d-none d-sm-block">
<div class="container d-flex justify-content-center">
<div class="d-flex">  
  <ul class="crumb">
  <li class="breadcrumb-item active"> <router-link to="/shoppingcart">Shopping Cart</router-link></li>
  <li class="breadcrumb-item " >
    <router-link
     :disabled="shoppingCart.length === 0" 
      :event="shoppingCart.length > 0 ? 'click' : ''"
      to="/checkout" >Checkout
    </router-link>
  </li>
  <li class="breadcrumb-item"><router-link to="/checkout/checkoutOrderOk">Order Complete</router-link></li>
  
</ul>
</div>




</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['shoppingCart'])
  }
}
</script>

<style scoped>
.bread {
  background-color: #0e153da6;
}



ul.crumb {
  list-style: none;
}
ul.crumb li {
  display: inline;

}
ul.crumb li+li:before {
 color: var(--theme);
 content: " > " !important;
 font-size: 20px;
 padding: 1rem
}

ul.crumb li a {
  color: var(--white);
  text-decoration: none;
}

ul.crumb li.active a {
  color: white;
  text-decoration: none;
}


ul.crumb li a:hover {
   color: var(--white);
  text-decoration: underline;
}
     a.router-link-exact-active {
   color: var(--theme)!important;
    }
</style>