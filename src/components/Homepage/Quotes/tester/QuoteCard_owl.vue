<template>

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

</template>

<script>

export default {
  name: "QuoteCard",
 props: ['item'],


  components: {

  },



};
</script>



<style scoped>
.starsActive{
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
</style>