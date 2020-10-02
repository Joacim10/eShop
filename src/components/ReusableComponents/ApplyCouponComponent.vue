<template>
  <div>
    <!-- mb-2 -->
    <div class="py-4 px-4 borderDotted rounded">
      <!-- pl-4 mt-4-->
      <div class=" ">
        <div class="text-center">
          <p v-if="getCartDiscountTotal > 0" class="mb-0">
            You have {{ getCartDiscountTotal }}% discount
          </p>
          <p v-else class="mb-0">If you have a coupon code, please apply it below.</p>
        </div>
      </div>
      
      <!-- jm  -->
      <div class="my-input-area rounded-pill border">
        <div class="input-group border-0">
          <input
            type="text"
            class="form-control border-0 ml-2"
            placeholder="Coupon code  ex.0010"
            aria-label="Coupon code"
            aria-describedby="couponCode1"
            v-model="couponCode"
            v-on:change="$v.couponCode.$touch()"
            v-bind:class="{
              invalid:
                ($v.couponCode.$error && $v.couponCode.required) ||
                ($v.couponCode.$error && !$v.couponCode.maxLength),
            }"
          />
          <div class="input-group-append">
            <!-- btn-outline-secondary -->
            <button
              class="btn rounded-pill color-primary themeBg btn-outline-secondary text-light"
              type="button"
              id="couponCode1"
              v-on:click.prevent="applyCoupon"
            >
              
              {{ !getCartDiscountTotal > 0 ? "Apply Coupon" : "Remove Coupon" }}
            </button>
          </div>
        </div>
      </div>
      <small
        class="m-0 p-0"
        v-if="!$v.couponCode.minLength || !$v.couponCode.maxLength"
      >
        please use {{ $v.couponCode.$params.minLength.min }} digits ex. 0010
      </small>
      <small class="m-0 p-0" v-if="!$v.couponCode.numeric"
        >please use number.</small
      >
      <!-- <small> {{couponCode}} </small> -->
      <!-- jm  end -->
      <!--  -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      couponCode: null,
    };
  },

  validations: {
    couponCode: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(4),
      numeric,
    },
  },

  methods: {
    ...mapActions(["addDiscount"]),

    applyCoupon() {
      // om det finns valid värde i fält
      if (!this.$v.$invalid) {
        // console.log("apply coupon");
        // console.log(this.discountValue(this.couponCode));
        let value = this.discountValue(this.couponCode);
        // skicka data till store
        this.addDiscount(value);

        // rensa input
        this.couponCode = null;
      } else if (this.getCartDiscountTotal > 0 && this.$v.$invalid) {
        // console.log('remove discount');
        this.addDiscount(0);
      }
    },

    discountValue: function (code) {
      // console.log(code);
      switch (code) {
        case "0010":
          return 10;
        case "0020":
          return 20;
        case "0030":
          return 30;
        case "0040":
          return 40;
        case "0050":
          return 50;
        default:
          return 0;
      }
    },
  },

  computed: {
    ...mapGetters(["getCartDiscountTotal"]),
  },
};
</script>

<style scoped>
.btnRadiusSub {
  border-radius: 20px;
  right: 0%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 3px !important;
}
.borderDotted {
  border: 3px dotted lightgray;
}
.subInput {
  border-radius: 20px 20px 20px 20px !important;
  height: 50px;
}

/* klasser för vuelidate */
.invalid {
  border: 1px solid #f77272 !important;
  background-color: #f8b1b1 !important;
}
.valid {
  background-color: #6fffab !important;
}

.btndisabled {
  background-color: #8ab8b3 !important;
}

/* jm */
.my-input-area {
  background-color: #fff;
  padding: 2px 5px 2px 5px;
}

@media (max-width: 375px) {
  .pxSmallScreen {
    padding: 10px 10px 10px 10px !important;
  }
}
</style>