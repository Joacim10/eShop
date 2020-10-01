<template>
      <div>
        <div class=" mb-2  py-1  px-4 borderDotted rounded">
      <div class="pl-4 mt-4">
        <p class="mb-0">If you have a coupon code, please apply it below.</p>
      </div>
      <div class="input-group mt-3 mb-4">
          <input
            type="text"
            class="form-control position-relative subInput"
            placeholder="Coupon code"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              class="btnRadiusSub position-absolute  themeBg border-0 text-white px-4 pxSmallScreen"
            >Apply Coupon</button>
          </div>
          </div>
          </div>

          </div>
       
</template>

<script>
export default {

}
</script>

<style scoped>
.btnRadiusSub{
  border-radius: 20px;
  right: 0%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 3px !important;
  
}
.borderDotted{
  border: 3px dotted lightgray;
}
.subInput{
  border-radius: 20px 20px 20px 20px !important;
  height: 50px;
} 
@media (max-width: 375px) {
  .pxSmallScreen{
    padding: 10px 10px 10px 10px !important;
   
  
  }
}
</style>