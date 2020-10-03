<template>
<div>
  <PortfolioBread />
  <div class="container">
    <h1 class="f-play text-center font-weight-bold pt-3 pb-3 text-uppercase theme">Portfolio</h1>
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