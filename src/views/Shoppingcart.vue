<template>
  <div>
    <BannerShoppingCart />
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-lg-8">
        <hr class="mb-0 themeBg">
        <!--ShoppingCart Items--->
        <ShoppingCartItems />
      </div>

      <!-- TOTALCART-->
      <div class="col-12 col-lg-4">
        <ShoppingCartTotal />
      </div>
    </div>
    <!-- APPLY CODE // KAN ANVÄNDAS PÅ FLER STÄLLEN-->
    <div class="mt-1 col-12 col-lg-5 borderDotted rounded">
         <ApplyCouponComponent /> 
     </div>
   
  </div>
  </div>
</template>

<script>
import ShoppingCartTotal from "../components/ShoppingCart/ShoppingCartTotal";
import ApplyCouponComponent from "../components/ReusableComponents/ApplyCouponComponent";
import ShoppingCartItems from "../components/ShoppingCart/ShoppingCartItems";
import BannerShoppingCart from '../components/ShoppingCart/BannerShoppingcart'

export default {
  name: "Shoppingcart",
  components: {
    ShoppingCartTotal,
    ApplyCouponComponent,
    ShoppingCartItems,
    BannerShoppingCart,
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
</style>