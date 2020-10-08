<template>
  <div id="testimonial" class="mt-5 container-fluid bgDarkBlue">

   <div class="container mt-1">
      <div class="row"> 
                      
       <!-- karusell       -->

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

           <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol> 

  <div class="carousel-inner">

    <div class="carousel-item" v-for="(item, index) in items" :key="index" :item="item" :class="{ active: index==0 }" > 
                 
                 <!-- Loop item -->

                
                 <div class="item justify-content-center">

                    <div class="col-lg-12 text-center ">
                    <img src="/image/Quotes/Quote.png" class="quote ml-auto mr-auto mb-4" alt="Quote" />
                    </div>

                    <div class="mt-5 mb-4">
                        <div class="person d-block ml-auto mr-auto bgGrey"></div>
                    </div>

                    <div class=" col-lg-12 text-center mt-3">
                        <i class=" starsActive fas fa-star"></i>
                        <i class=" starsActive fas fa-star"></i>
                        <i class="starsActive fas fa-star"></i>
                        <i class="starsActive fas fa-star"></i>
                        <i class=" theme far fa-star"></i>
                    </div>

                    <div class="col-lg-12 text-center mt-3">
                        <span class="theme pb-1 text-uppercase">{{item.name}}</span> <br>
                        <small class="text-white ">{{item.firm}}</small>
                    </div>

                    <div class="col-lg-10 offset-lg-1 text-center text-white pb-5 mt-2 text-wrap">
                        <p>{{item.text}} </p>
                    </div>

          </div> 

       <!-- / Loop item -->
         
    </div>

  

  </div>

  <!-- Pilar höger och vänster -->

  <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"><img src="/Image/Carousel/Previous btn.png" alt="" class="mt-2"></span>
    <span class="sr-only">Previous</span>
  </a>
  
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"><img src="/Image/Carousel/Next btn.png" alt="" class="mt-2"></span>
    <span class="sr-only">Next</span>
  </a>  -->

</div>

       <!-- /karusell  -->
            
     
        
      </div>
    </div>

  </div> 
</template>

<script>


export default {
  name: "Quote",


  components: {
    
  },

  data: function() {
    return {

      items: [
       {name: 'Johnny Wesmullar', firm: 'CEO, Biotech Inc.', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       {name: 'Lisa Lang', firm: 'Teacher, EC Utbildning', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       {name: 'Mia Song', firm: 'Frontend developer', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       ],
    }
  },

  mounted(){
      $('.carousel').carousel();
  }

 }





</script>

<style >
#testimonial .starsActive{
  color: var(--theme);
}

#testimonial .quote {
    width: auto;
  height: 70px;
}
#testimonial .person {
  width: 190px;
  height: 200px;
  border-radius: 8px;
  border: 3px solid var(--white);
}

/* Pluppar  */

.carousel-indicators .active {
    height:10px;
    width: 10px;
    border-radius: 50%;
    background-color: var(--theme);

} 

.carousel-indicators li {
    height:10px;
    width: 10px;
    border-radius: 50%;
    background-color: var(--grey);
    opacity: 1;

} 
 /* Pilar höger och vänster  */

 /* .carousel-control-next-icon,
.carousel-control-prev-icon  {
   background-image: none;
  background: var(--theme)!important;
  color:var(--white)!important;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--white) !important;
  opacity: 1;
} 

.carousel-control-next, .carousel-control-prev {
  opacity: unset !important;
}   */



/*
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 50px;
  height: 50px;
  outline: white;
  background-size: 100%, 100%;
  background: var(--theme)!important;
  border-radius: 50%;
  border: 1px solid white;
  background-image: none;
}


.carousel-control-prev-icon:active,
.carousel-control-next-icon:active {
   border: 1px solid white;
   background: var(--theme)!important;
}


*/

 
</style>