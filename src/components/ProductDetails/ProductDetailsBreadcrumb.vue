<template>
  <div class="bread pt-3 pb-3">
   <div class="container d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <div class="d-flex">
          <ul class="crumb pt-3">

            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>

            <li class="breadcrumb-item">
              <a href="#">Shop</a>
            </li>

            <li class="breadcrumb-item">
              <a href="#">Shoes</a>
            </li>

            <li class="breadcrumb-item active">
              <a href="#">Gents Blue Lightweight Trainers</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex pt-4 pb-3 white align-items-lg-center justify-content-between">
        <div class="d-flex bgWhite p-1 pl-3 pr-3 rounded">
          <img :src="'/Image/Brand/' + product[0].brand + '.png' " /> 

        </div>

        <div class="d-flex align-items-lg-center justify-content-between ml-3">
          <div class="ml-2">
            <a href="#">
            <i class="fas fa-chevron-left"></i>
            </a>
          </div>
          <div class="ml-4">
            <a href="#">
            <img src="/Image/ProductDetails/gridIcon.png" alt />
            </a>
          </div>
          <div class="ml-4">
            <a href="#">
            <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: "ProductDetailsBreadcrumb",

   props: ['id'],

  components: {},


  data() {
    return {
       quantity: 1
    };
  },

  methods: {
    ...mapActions(['getProductById'])
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

a:hover{
  color: var(--theme) !important;
}

/* Bradcrumb */
.bread {
  background-color: #0e153dd5;
}

ul.crumb {
  list-style: none;
  padding-left: 0;
}
ul.crumb li {
  display: inline;
}
ul.crumb li + li:before {
  color: var(--white);
  content: " / " !important;
  padding: 1rem;
}

ul.crumb li a {
  color: var(--theme);
  text-decoration: none;
}

ul.crumb li.active a {
  color: var(--white);
  text-decoration: none;
}

ul.crumb li a:hover {
  color: var(--white);
  text-decoration: underline;
}

/* logo */
.brand {
  max-height: 2.2rem;
  width: auto;
}
</style>