<template>
<div>
  <PortfolioBread />
  <div class="container">
    <h1>Portfolio</h1>
  </div>
  </div>
</template>

<script>
import PortfolioBread from '../components/BreadCrumbs/PortfolioBread'
export default {
  name: "Portfolio",
  components: {
    PortfolioBread,
  },
};
</script>