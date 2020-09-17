<template>
<div class="bread pt-4 pb-3">
<div class="container d-flex justify-content-center">
<div class="d-flex">  
  <ul class="crumb">
  <li class="breadcrumb-item"><a href="#">Shopping Cart</a></li>
  <li class="breadcrumb-item active" ><a href="#" >Checkout</a></li>
  <li class="breadcrumb-item"><a href="#">Order Complete</a></li>
  
</ul></div>




</div>
</div>
</template>


<script>
export default {
  name: "CheckoutBreadcrumb",
};
</script>

<style scoped>

.bread {
  background-color: #0e153da6;
}



ul.crumb {
  list-style: none;
}
ul.crumb li {
  display: inline;

}
ul.crumb li+li:before {
 color: var(--theme);
 content: " > " !important;
 padding: 1rem;
}

ul.crumb li a {
  color: var(--white);
  text-decoration: none;
}

ul.crumb li.active a {
  color: var(--theme);
  text-decoration: none;
}


ul.crumb li a:hover {
   color: var(--white);
  text-decoration: underline;
}
</style>