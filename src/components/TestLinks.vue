<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/" class="">Home</router-link>
      </li>
      <li>
        <router-link to="/shop"  class="">Shop</router-link>
      </li>
     <li>
        <router-link :to="'/shop/' + produktId">Product 123</router-link>
      </li>
      <li>
        <router-link to="/categories">Categories</router-link>
      </li>
      <li>
        <router-link to="/pages">Pages??</router-link>
      </li>
      <li>
        <router-link to="/blog">Blog</router-link>
      </li>
      <li>
        <router-link to="/shoppingcart">Shoppingcart</router-link>
      </li>
      <li>
        <router-link to="/checkout">Checkout</router-link>
      </li>
      <li>
        <router-link to="/account">My Account</router-link>
      </li>
      <li>
        <router-link to="/whishlist">Whishlist</router-link>
      </li>
      <li>
        <router-link to="/compare">compare</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/team">team</router-link>
      </li>

      <li>
        <router-link to="/portfolio">portfolio</router-link>
      </li>
     <li>
        <router-link :to="'/portfolio/' + portfolioId">Portfolio 456</router-link>
      </li>
           <li>
        <router-link to="/contact">contact</router-link>
      </li>
           <li>
        <router-link to="/dgdfg">404 finns också</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "Test_Links",
  data() {
        return {
            produktId: 123,
            portfolioId: 456
        }
    }
};
</script>