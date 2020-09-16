<template>
  <div>
    <DiscountBanner/>
    <QuotesSlide />
    <FlashSale />
  </div>
</template>

<script>
import DiscountBanner from "@/components/Homepage/DiscountBanner.vue";
import QuotesSlide from "@/components/Homepage/QuotesSlide.vue"
import FlashSale from "@/components/Homepage/FlashSale.vue"

export default {
  name: "Home",
  components: {
  DiscountBanner,
  QuotesSlide,
  FlashSale,
  },
};
</script>
