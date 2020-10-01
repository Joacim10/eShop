<template>

  <div class="row align-items-center">   

   <div class="col-12 col-md-9 pt-0"><img class="bild rounded" :src="product.image"></div>
    
    <div class="col-3 d-none d-md-flex flex-md-column justify-content-around pl-0 pr-2 pb-2 pt-2">

      <span class="d-flex  mb-2"><img class="tumme rounded" :src="product.image"></span>
      <span class="d-flex  mb-2"><img class="tumme rounded" :src="product.image"></span>
      <span class="d-flex  mb-2"><img class="tumme rounded" :src="product.image"></span>
      <span class="d-flex  "><img class="tumme rounded" :src="product.image"></span>

    </div>
     
  </div>
  
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: "ProductImage",

  props: ['id'],

  components: {},


  data() {
    return {
       quantity: 1,
    };
  },

  methods: {
    ...mapActions(['getProductById', 'addProductToCart'])
  },
  created() {
    this.getProductById(this.id)
  },
  computed: {
    ...mapGetters(['product'])
  }
  


};


</script>

<style scoped>

.bild {
        object-fit: cover;
         height: 310px;
         width: 100%;    
        object-position: top center;
    }

.tumme {
        object-fit: cover;
         height: 100%;
         width: 100%;    
        object-position: top center;
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


.bild {
        object-fit: cover;
         height: 430px;
         width: 100%;    
        object-position: top center;
    }

.tumme {
        object-fit: cover;
         height: 100px;
         width: 100%;    
        object-position: top center;
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
  
  /* ----------------------------------------- */
  /* MEDIA sm-xxl*/
  /* ----------------------------------------- */
  
  @media (min-width: 1400px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
      max-width: 1320px;
    }
  }
  

</style>