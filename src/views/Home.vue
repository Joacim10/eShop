<template>
  <div>
    <ShoppingFun />
    <Box />    
    <Category />
    <div class="container my-4">
      <div class="text-center pt-5">
        <h1 class="font-weight-bold">NEW <h1 class="theme font-weight-bold d-inline-block"> ARRIVALS </h1></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        Check out our latest products from top fashion designers
      </div>
      <Carousel class="d-sm-none" :windowSize="1" :badgetype="['New']" />
      <Carousel class="d-none d-sm-block d-md-none" :windowSize="2" :badgetype="['New']" />
      <Carousel class="d-none d-md-block" :windowSize="3" :badgetype="['New']"/>
    </div>
    <DiscountBanner/>
    <div class="container my-4">
      <div class="text-center pt-5">
        <h1 class="font-weight-bold">FEATURED <h1 class="theme font-weight-bold d-inline-block"> PRODUCTS </h1></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        Check out our monthly featured products from top brands
      </div>
      <Carousel class="d-sm-none" :windowSize="1" :badgetype="['Hot', 'Discount']" />
      <Carousel class="d-none d-sm-block d-md-none" :windowSize="2" :badgetype="['Hot', 'Discount']" />
      <Carousel class="d-none d-md-block" :windowSize="3" :badgetype="['Hot', 'Discount']"/>
    </div>
    <QuotesSlide />
    <LatestBlog />
    <FlashSale />
    <SubscribeNow />
  </div>
</template>

<script>
import ShoppingFun from "@/components/Homepage/ShoppingFun.vue";
import Box from "@/components/Homepage/Box.vue";
import Category from "@/components/Homepage/Category.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import DiscountBanner from "@/components/Homepage/DiscountBanner.vue";
import QuotesSlide from "@/components/Homepage/QuotesSlide.vue";
import LatestBlog from "@/components/Homepage/LatestBlog/LatestBlog.vue";
import FlashSale from "@/components/Homepage/FlashSale.vue";
import SubscribeNow from "@/components/Homepage/SubscribeNow.vue"

export default {
  name: "Home",
  components: {
  ShoppingFun,
  Box,
  Category,
  Carousel,
  DiscountBanner,
  QuotesSlide,
  LatestBlog,
  FlashSale,
  SubscribeNow
  },
};
</script>

