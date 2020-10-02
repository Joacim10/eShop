<template>
  <div id="latestblog" class="mt-5 container text-center">
    <h1 class="text-center f-play text-uppercase theme font-weight-bold ">
      Latest
      <span class="darkBlue">blog</span>
    </h1>
    <hr class="zigzag" />
    <p class="mb-5">Read our latest posts about our events and trending news</p>
    <!-- Headline end-->


    <div class="row justify-content-center justify-content-md-start">
     
  

        <LatestBlogCard/>          
        <LatestBlogCard/>
      
      
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

</script>
     
<style scoped>

 /* h1 {
  color: var(--theme);
  text-transform: uppercase;
  font-family: 'Play', sans-serif;
  font-weight: 900;

}

h1 span {
  color: var(--darkBlue)
}  */


</style>
