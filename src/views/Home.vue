<template>
  <div>
    <ShoppingFun />
    <Box />
    <Category />
    <DiscountBanner/>
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
  DiscountBanner,
  QuotesSlide,
  LatestBlog,
  FlashSale,
  SubscribeNow
  },
};
</script>
