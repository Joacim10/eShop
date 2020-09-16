<template>
  <div>
    <DiscountBanner/>
    <QuotesSlide />
  </div>
</template>

<script>
import DiscountBanner from "@/components/Homepage/DiscountBanner.vue";
import QuotesSlide from "@/components/Homepage/QuotesSlide.vue"

export default {
  name: "Home",
  components: {
  DiscountBanner,
  QuotesSlide,
  },
};
</script>
