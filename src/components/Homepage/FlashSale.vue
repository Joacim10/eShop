<template>
    <div class="container-fluid bgDarkBlue heightDiv mb-5 mt-5">
        <div class="container">
            <div class="row">

            <div class=" col-lg-7 text-white">
                   <div class="col-lg-5 themeBg text-center pt-5">
                    <span class="extraH1 f-play font-weight-bold text-uppercase"> FLASH</span>
                    <span class="extraH1  text-center f-play font-weight-bold text-uppercase"> SALE</span>
                  
                    <h4 class="text-uppercase pb-5 mt-3">up to 50% off</h4>
                    
                   </div>
                
                </div>

            <div class="col-lg-5  py-5 mt-1 text-sm-center ">
                    <div class="d-flex justify-content-center mt-5">
                    <div class="circleFlash py-2 mr-3">
                        <h3 class=" smH3 theme font-weight-bold mb-1">7</h3>
                        <small>days</small>
                    </div> 
                    <div class="circleFlash py-2 mr-3">
                        <h3 class=" smH3 theme font-weight-bold mb-1">23</h3>
                        <small>Hours</small>
                    </div> 
                    <div class="circleFlash py-2 mr-3">
                        <h3 class=" smH3 theme font-weight-bold mb-1">46</h3>
                        <small>Minutes</small>
                    </div> 
                    <div class="circleFlash py-2 mr-3">
                        <h3 class=" smH3 theme font-weight-bold mb-1 ">12</h3>
                        <small>Seconds</small>
                    </div> 
                    </div>
                   <button class=" mt-5 btn px-5 pt-3 pb-2 btn-light btnRadius theme text-uppercase font-weight-bold btn-sm elementCenterSm"><h6>Shop now</h6></button>
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
    .extraH1 {
   font-size: 4rem;
   line-height: 0.8;
  
 }
 .circleFlash{
  width: 90px;
  height: 90px;
  line-height: 10px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  border: 2px dotted var(--theme);

}
.smSmallText{
    font-size: 10px;
    margin-top: 0;
  }
  .smH3{
    font-size: 28px;
    margin-top: 7px !important;
  }
.btnRadius{
  border-radius: 30px ;
}
.heightDiv{
   min-height: 40vh;
}
@media (max-width: 570px){
  .elementCenterSm{
    margin-left: 4rem;
    
  }
  .smH3{
      font-size: 20px;
  }
  .circleFlash{
      height: 70px;
      width: 70px;
  }
 }



</style>