<template>
  <div id="testimonial" class="mt-5 container-fluid bgDarkBlue">

   <div class="container mt-1">
      <div class="row">                    
          <div id="owlQuote" class="owl-carousel owl-theme">                

            <QuoteCard  v-for="(item, index) in items" :key="index" :item="item"/>

          </div>
      </div>
    </div>

  </div> 
</template>

<script>

import QuoteCard from "@/components/Homepage/Quotes/QuoteCard.vue";

export default {
  name: "Quote",
  components: {
    QuoteCard
  },

  data: function() {
    return {

      items: [
        {name: 'Johnny Wesmullar', firm: 'CEO, Biotech Inc.', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       {name: 'Lisa Lang', firm: 'Teacher, EC Utbildning', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       {name: 'Mia Song', firm: 'Frontend developer', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'},
       ]
    }
  },


}

  $(document).ready(function () {
  var owl = $("#owlQuote");
  owl.owlCarousel({
    items: 3,
    dots: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    responsiveClass: true,
   
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });


});
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


#testimonial .owl-theme .owl-dots .owl-dot span {
  background: var(--white)  !important;
    width: 10px;
  height: 10px;
 }

#testimonial  .owl-theme .owl-dots .owl-dot.active span {
  background: var(--theme)  !important;
 }
</style>