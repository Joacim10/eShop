<template>
  <div>
    <hr />
    <!-- Payment -->
    <div class="border-bottom mt-3 pb-3">
      <div>
        <div class="d-flex">
          <span>
            <input type="radio" aria-label="Radio button for following text input" />
          </span>
          <span class="ml-2">Direct bank transfer</span>

          <br />
        </div>
      </div>

      <div>
        <div class="d-flex">
          <span>
            <input type="radio" aria-label="Radio button for following text input" />
          </span>
          <span class="ml-2">Check Payment</span>

          <br />
        </div>
      </div>

      <div>
        <div class="d-flex">
          <span>
            <input type="radio" aria-label="Radio button for following text input" />
          </span>
          <span class="ml-2">Cash on delivery</span>

          <br />
        </div>
      </div>

      <div>
        <div class="d-flex align-items-end">
          <span>
            <input type="radio" aria-label="Radio button for following text input" />
          </span>
          <span class="ml-2">Paypal</span>
          <span class="theme ml-2"><img src="/Image/checkout/PayPalLogo.png"></span>
          <span class="ml-2 small"><a href="#" class="grey">What is Paypal?</a> </span>

          <br />
        </div>
      </div>
    </div>
    <div class="border-bottom mt-3 pb-3">
      <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" class="theme">privacy policy</a> .</p>
    </div>
    <div class="mt-3 pb-3">
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="account" />
          <label
            class="form-check-label"
            for="account"
          >I have read and agree to the website terms and <a href="#" class="theme">conditions</a> <span class="theme">*</span></label>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="btn btnTheme white col-lg-auto text-uppercase text-bold"
    >Place order</button>
  </div>
</template>


<script>
export default {
  name: "CheckoutPlaceorder",
};
</script>

<style>
</style> 