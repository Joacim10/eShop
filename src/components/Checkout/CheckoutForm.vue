<template>
    <div>
<p class="font-weight-bold text-uppercase">Billing details</p>

  


  <div class="form-row">

    <!--  Förnamn -->
   
    <div class="col-md-6 mb-3">
      <label for="firstName">First name <span class="theme">*</span></label>
      <input type="text" class="form-control" id="firstName" required>
      <!-- <div class="valid-feedback">Looks good!</div> -->
      <div class="invalid-feedback">Please insert your first name</div>
    </div>

 <!--  Last name -->
    <div class="col-md-6 mb-3">
      <label for="lastName">Last name <span class="theme">*</span></label>
      <input type="text" class="form-control" id="lastName" required>
      <!-- <div class="valid-feedback">Looks good!</div> -->
      <div class="invalid-feedback">lease insert your last name</div>
    </div>

<!--  Company -->
   <div class="col-12 mb-3">
      <label for="company">Company name (optional)</label>
      <input type="text" class="form-control" id="company" >
    </div>

<!--  Country / Region -->
    <div class="col-12 mb-3">
      <label for="country">Country / Region <span class="theme">*</span></label>
      <select class="custom-select" id="country" required>
        <option selected disabled value="">Select</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select a Country / Region.
      </div>
    </div>

<!--  Street address -->
    <div class="col-12 mb-3">
      <label for="address">Street address  <span class="theme">*</span></label>
      <input type="text" class="form-control" id="address" placeholder="House number and street name" required>
      <!-- <div class="valid-feedback">Looks good!</div> -->
      <div class="invalid-feedback">Please insert your street address</div>
    </div>

<!--  Street address -->
    <div class="col-12 mb-3">     
      <input type="text" class="form-control" id="apartment" placeholder="Apartment, suite, unit, etc. (optional)" >
    </div>


<!--  Town / City -->

    <div class="col-12 mb-3">
      <label for="city">Town / City <span class="theme">*</span></label>
      <input type="text" class="form-control" id="city" required>
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>


 <!--  State -->

   <div class="col-12 mb-3">
      <label for="state">State  <span class="theme">*</span></label>
      <select class="custom-select" id="state" required>
        <option selected disabled value=""> </option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">Please select a valid state.</div>
    </div>



<!--  Zip -->
   <div class="col-12 mb-3">
      <label for="zip">Zip <span class="theme">*</span></label>
      <input type="number" class="form-control" id="zip" required>
      <div class="invalid-feedback">Please provide a valid zip-code.</div>
    </div>

<!--  Phone -->
       <div class="col-12 mb-3">
      <label for="tel">Phone <span class="theme">*</span></label>
      <input type="number" class="form-control" id="tel" required>
      <div class="invalid-feedback">Please insert your Phone number</div>
    </div>



<!--  Email -->
       <div class="col-12 mb-3">
      <label for="email">Email <span class="theme">*</span></label>
      <input type="email" class="form-control" id="email" required>
      <div class="invalid-feedback">Please insert your e-mail</div>
    </div>
    

  </div>

<!--  Checkbox account -->

  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="account" >
      <label class="form-check-label" for="account">
       Create an account?
      </label>
    </div>
  </div>

  <hr>

<!--  Checkbox adress2 -->
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="adress2" >
      <label class="form-check-label font-weight-bold text-uppercase" for="account">
       Ship to a different address?
      </label>
    </div>
  </div>

<!--  textbox Notes  -->
    <div class="form-group">
    <label for="notes">Order notes (optional)</label>
    <textarea class="form-control" id="notes" rows="8" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
  </div>
   


    </div>
</template>


<script>
export default {
      name: 'CheckoutForm',

}


</script>


<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>

<style>


</style>