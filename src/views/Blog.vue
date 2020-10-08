<template>
<div>
  <BlogBread />
  <div class="container">
    <h1 class="f-play text-center font-weight-bold pt-3 pb-3 text-uppercase theme">Blog</h1>
  </div>
  </div>
</template>

<script>
import BlogBread from '../components/BreadCrumbs/BlogBread'
export default {
  name: "Blog",
  components: {
    BlogBread,
  },
};
</script>