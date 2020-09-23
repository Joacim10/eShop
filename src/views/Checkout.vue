<template>
  <div class="pb-5">
    <CheckoutBreadcrumb />
    <div class="container pt-5">
      <form class="needs-validation" novalidate>
        <div class="row">
          <!-- Col 1 -->
          <div class="col">
            <p>
              Returning customer?
              <!-- <a href="#" class="theme">Click here to login</a> -->
              <router-link to="/account" class="theme" >Click here to login</router-link>
            </p>
            <p>
              Have a coupon?
              <a href="#" class="theme">Click here to enter your code</a>
            </p>

            <div class="mt-3 mb-3">
              <CheckoutCupon />
            </div>

            <CheckoutForm />
          </div>

          <!-- Col 2 -->
          <div class="col">
            <div class="card">
              <div class="card-header bgDarkBlue text-center theme f-24 py-1">
                <span class="text-uppercase f24">Your order</span>
              </div>

              <div class="card-body">
                <CheckoutOrder />
                <CheckoutPlaceorder />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CheckoutBreadcrumb from "@/components/Checkout/CheckoutBreadcrumb.vue";
// import CheckoutCupon from "@/components/Checkout/CheckoutCupon.vue";
import CheckoutCupon from "@/components/ReusableComponents/ApplyCouponComponent.vue";

import CheckoutForm from "@/components/Checkout/CheckoutForm.vue";
import CheckoutOrder from "@/components/Checkout/CheckoutOrder.vue";
import CheckoutPlaceorder from "@/components/Checkout/CheckoutPlaceorder.vue";

export default {
  name: "Checkout",
  components: {
    CheckoutBreadcrumb,
    CheckoutCupon,
    CheckoutForm,
    CheckoutOrder,
    CheckoutPlaceorder,
  },
};
</script>

