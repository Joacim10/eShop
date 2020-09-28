<template>
<div>
  <ProductBread />
  <div class="container">
    details for: {{ $route.params.produktId}}
    <h1>ProductDetails</h1>
  </div>
</div>
</template>

<script>
import ProductBread from '../components/BreadCrumbs/ProductBread'
export default {
  name: "Product",
  components: {
    ProductBread,
  },
    data() {
        return {
       
        }
    }
};
</script>