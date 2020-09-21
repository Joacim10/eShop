<template>
  <div class="container-fluid bgDarkBlue">
    <div class="text-center py-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bgDarkBlue justify-content-center">
          <li class="mr-2">
            <router-link class="text-white active" to="/shoppingcart">Shopping Cart</router-link>
            <i class="fas fa-chevron-right theme ml-1"></i>
          </li>
          <li class="mr-2 ">
            <router-link class="text-white" to="/checkout">Checkout </router-link>
            <i class="fas fa-chevron-right theme"></i>
          </li>
          <li class="breadcrumb-item  text-white" aria-current="page">Order Complete</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
    color: var(--theme) !important;
}
</style>