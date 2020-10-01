<template>
    <div class="bgDarkBlue pt-4 pb-3">
        <div class="container d-flex justify-content-between ">
            <div>
                  <ul class="crumb mt-2">
                     <li class="breadcrumb-item active"> <router-link to="/"><small>Home</small></router-link></li>
                     <li class="breadcrumb-item active"> <router-link to="/products"><small>Products</small></router-link></li>
                     <li class="breadcrumb-item active"> <router-link to="/shoes"><small>{{category}}</small></router-link></li>
                     <li class="breadcrumb-item " ><router-link to="/shop/:productId" ><small>{{name}}</small></router-link></li>
                </ul>
            </div>
            <div class="d-flex align-items-lg-center justify-content-between" >
              <!-- <img class="bg-light px-3 py-1 rounded" src="/image/Brand/Bexim.png" alt=""> -->
               <img class="bg-light px-3 py-1 rounded brand img-fluid"  :src="'/Image/Brand/' + product.brand + '.png' " /> 

              <div class="align-items-lg-center justify-content-between ml-3">
              <i class="fas fa-chevron-left white  ml-3"></i>
              <i class="fas fa-th-large white  ml-3"></i>
              <i class="fas fa-chevron-right white  ml-3"></i>
              </div>
              <div>
                
              </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['category', 'name', 'id'],

  
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

}
</script>

<style scoped>

 .brand {
  max-height: 2.5rem;
  width: auto;
} 

.fas {
  font-size: 24px;
  
}


ul.crumb {
  list-style: none;
}
ul.crumb li {
  display: inline;

}
ul.crumb li+li:before {
 color: white;
 
}

ul.crumb li a {
  color: var(--white);
  text-decoration: none;
}

ul.crumb li.active a {
  color: var(--theme);
  text-decoration: none;
}


ul.crumb li a:hover {
   color: var(--white);
  text-decoration: underline;
}
     a.router-link-exact-active {
   color: var(--white)!important;
    }
</style>