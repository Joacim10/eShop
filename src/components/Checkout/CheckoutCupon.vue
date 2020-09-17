<template>

 <div class="p-5 theme">


Same cupon as in Shopping cart
   
    <!-- <div class="container border">
      <div class="row">
        <div class="col-12 pt-5 pb-5 text-center text-md-left">
          <div>
 
            <p>
             If you have a coupon code, please apply it below.
            </p>
          </div>
          <div>
            <div id="cupon">
              <div class="input-group row">
                <div class="col col-md-8">
                  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Coupon code" />
                </div>
                <button type="button" class="btn sub ml-n5">Apply Coupon</button>
              </div>
            </div>
          </div>
        </div>

      

      </div>
    </div> -->


  </div>

</template>


<script>
export default {
      name: 'CheckoutCupon',

}
</script>

<style scoped>
#cupon {
  border-color: var(--line);
}

#cupon .sub {
  color: var(--white);
  background-color: var(--theme);
  border-radius: 50px 50px;
  border: 0;
  padding: 0.2rem 1.5rem;
  z-index: 2;
}

#cupon .sub:hover {
  background-color: var(--darkBlue);
  color: var(--white);
  outline: 0;
}

.form-control {
  border-radius: 50px 0 0 50px !important;
  z-index: 1;
}

::placeholder {
    color: rgb(153, 153, 153) !important;
    font-size: 14px;  
}

/* .rounded-pill {
  border-radius: 1rem
} */

</style>