<template>
<div>
  <BlogBread />
  <div class="container">
    <h1>Blog</h1>
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