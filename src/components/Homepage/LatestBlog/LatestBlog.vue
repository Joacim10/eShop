<template>
  <div id="latestblog" class="mt-5 container text-center">
    <h1 class="text-center">
      Latest
      <span>blog</span>
    </h1>
    <hr class="zigzag" />
    <p class="mb-5">Read our latest posts about our events and trending news</p>
    <!-- Headline end-->


    <div class="row justify-content-center justify-content-md-start">
       <!-- <div id="owl5" class="owl-carousel owl-theme">  -->
  

        <LatestBlogCard/>          
        <LatestBlogCard/>
      
       <!-- </div>  -->
    </div>

  </div>
</template>


<script>

import LatestBlogCard from "@/components/Homepage/LatestBlog/LatestBlogCard.vue";

export default {
  name: "LatestBlog",
   components: {
  LatestBlogCard,
  },
};

//Owl

// $(document).ready(function () {
//   var owl = $("#owl5");
//   owl.owlCarousel({
//     items: 4,
//     loop: true,
//     margin: 20,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     nav: true,
//     dots: true,
//     responsiveClass: true,

//     responsive: {
//       0: {
//         items: 1,
//         nav: false,
//       },
//       300: {
//         items: 1,
//         nav: false,
//       },
//       600: {
//         items: 1,
//         nav: false,
//       },
//       1200: {
//         items: 2,
//         nav: true,
//       },
//     },
//   });
// });

</script>
     
<style scoped>

 h1 {
  color: var(--theme);
  text-transform: uppercase;
  font-family: 'Play', sans-serif;
  font-weight: 900;

}

h1 span {
  color: var(--darkBlue)
} 


</style>
