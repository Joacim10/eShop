<template>
  <div>
    <!-- <div class="carousel slide pl-0 pr-0" data-ride="carousel">
      <div class="productBg carousel-inner mb-first">
        <div class="mtHome carousel-item active">
          <div class="container">
            <h1 class="f-play">{{ $t("header.shoping") }}</h1>
            <h1 class="font-weight-bold theme f-play text-uppercase">
              {{ $t("header.fun") }}
            </h1>
            <p>
              Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam
              ultricies faucibus. Quisque quis erat sed
            </p>
            <router-link to="/products"
              ><button class="btn btnWhite pl-4 pr-4 p-2">
                {{ $t("header.button") }}
              </button></router-link
            >
          </div>

          <img
            src="/Image/ShoppingFun/couple2.png"
            class="d-block imgCarousel img-none"
          />
        </div>
      </div>
    </div> -->


    <div class="jumbotron p-0">
      <div class="container">
        <div class="row align-items-center pt-5 pt-lg-0 pb-0 pb-lg-0 ">
            
          <div class="col-12 col-md-6  col-lg-5 pb-4 ">
            <h1 class="f-play">{{ $t("header.shoping") }}</h1>
            <h1 class="font-weight-bold theme f-play text-uppercase">
              {{ $t("header.fun") }}
            </h1>
            <p class="">
              Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam
              ultricies faucibus. Quisque quis erat sed
            </p>

            <p class="">
              <router-link to="/products"
                ><button class="btn btnWhite pl-4 pr-4 p-2">
                  {{ $t("header.button") }}
                </button></router-link
              >
            </p>
          </div>

          <div class="d-none d-md-block col-12 col-md-6 col-lg-7 overflow-hidden funImg text-center">
            <img
              src="/Image/ShoppingFun/couple2.png"
              class="img-fluid "
            />
          </div>

        </div>
      </div>      
    </div>

  </div> 

</template>

<style scoped>
.funImg {
    height: 300px;
}



  /* ----------------------------------------- */
  /* MEDIA sm */
  /* ----------------------------------------- */
  
  @media (min-width: 576px) {
    .container, .container-sm {
      max-width: 540px;
    }

    
  }
  
  /* ----------------------------------------- */
  /* MEDIA sm-md */
  /* ----------------------------------------- */
  
  @media (min-width: 768px) {
    .container, .container-sm, .container-md {
      max-width: 720px;
    }  


.funImg {
    height: auto;
}


  }
  
  
  /* ----------------------------------------- */
  /* MEDIA sm-lg */
  /* ----------------------------------------- */
  
  @media (min-width: 992px) {
    .container, .container-sm, .container-md, .container-lg {
      max-width: 960px;
    }
 

  }
  
    
  
  /* ----------------------------------------- */
  /* MEDIA sm-xl */
  /* ----------------------------------------- */
  @media (min-width: 1200px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: 1140px;
    }
  }
  

  

/* .mtHome {
  margin-top: 5rem;
  height: 400px;
}

.imgCarousel {
  margin-left: 40vw;
  margin-top: -20rem;
}

@media (max-width: 1000px) {
  .img-none {
    display: none !important;
  }
}

@media (max-width: 1025px) {
  .mb-first {
    padding-bottom: 0rem;
    padding-top: 0rem;
  }
} */


</style>