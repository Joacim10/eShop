<template>
<div class="container-fluid bgMediumGrey mb-5 mt-5">
  <div class="container">
    <div class="row">
      <div class=" col-lg-7 text-white">
          <div class="col-lg-5 themeBg text-center pyCustom">
          <span class="extraH1  font-weight-bold mr-2 f-play text-uppercase"> 30%</span>
          <span class="extraH3 font-weight-bold"> OFF</span>
          <p class="mt-2 f-play text-uppercase">for new customers </p>
          <router-link to="/products"><button class=" px-5 py-3 btn mt-2 btnRadius btnDarkBlue text-uppercase font-weight-bold">shop now</button></router-link>
          </div>
      
      </div>
      <div class="col-lg-5 text-white align-self-center py-5  text-lg-left elementCenterSm">
          <small>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</small>
          <div class="mt-4 text-sm-center  text-lg-left">
          <button class="btn pxDiscountBtn py-3  btnWhite btnRadius  text-uppercase f-18 btn-sm"> Learn more</button>
          </div>
          
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
.pyCustom{
padding-top: 6rem;
padding-bottom: 7rem; 
}
.btnRadius{
  border-radius: 30px ;
}
.extraH1 {
   font-size: 4rem;
   line-height: 0.8;
  
 }
 .extraH3 {
   font-size: 2.4rem;
 }
 .pxDiscountBtn{
     padding: 40px 40px;
 }
  @media (max-width: 570px){
  .elementCenterSm{
    margin-left: 4rem;
    
  }
 }

 
</style>