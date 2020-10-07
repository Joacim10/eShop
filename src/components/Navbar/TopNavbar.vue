<template>
  <div class="themeBg">
    <div class="container d-flex justify-content-between d-none">
      <nav class="navbar navbar-expand-lg py-0 px-0 border-right">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item dropdown">
            <div class="locale-switcher mblang d-flex ">
              <select class="dropdown-item text-white" v-model="$i18n.locale">
                <option value="en" class="text-dark">ENG</option>
                <option value="sv" class="text-dark">SWE</option>
              </select>

              <select class="dropdown-item text-white locale-switcher mr-2">
                <option value="ENG">USD</option>
              </select>
            </div>
            
          </li>

              <!-- Dropdown USD Visas bara i large skärm -->
           
          </ul>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light p-0">
          <ul class="navbar-nav">
              <li class="nav-item d-none d-lg-flex">
                <a class="nav-link text-white border-right px-3" href="#">{{ $t("nav.newsletter") }}</a>
              </li>
              <li class="nav-item d-none d-lg-flex">
                <a class="nav-link text-white border-right px-3" href="#">{{ $t("nav.contact") }}</a>
              </li>
              <li class="nav-item d-none d-lg-flex">
                <a class="nav-link text-white border-right px-3" href="#">FAQs</a>
              </li>
          </ul>

            <!--- Visas från medium -->
        <div class="ml-2 d-none d-md-block">
            <a class="text-white mr-2">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-white mr-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-white mr-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="text-white mr-2">
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a class="text-white">
              <i class="fab fa-youtube"></i>
            </a>
        </div>
      </nav>

        <!--Visas endast i mobil X-Small -->
       <div class="mt-2 p-0 mb-2  text-white d-sm-none d-lg-none d-xl-none">
           <router-link to="/account"><i class="fas fa-user text-white fa-lg"></i></router-link>
           <router-link to ="/shoppingcart"><i class=" text-white fa-lg ml-2 fas fa-shopping-bag"></i></router-link> 
              <span class="text-white ml-1 py-1">{{shoppingCartItemCount}}</span>  
              <span class="ml-2">${{shoppingCartTotal}}</span>
        </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "wishlistItemCount",
      "shoppingCartItemCount",
      "shoppingCartTotal"
    ])
  }
};
</script>

<style scoped>

select {
  padding: 0 !important;
  outline: none;
}


.dropdown-item:hover {
  color: var(--theme);
  text-decoration: none;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: white;
  text-decoration: none;
  background-color: transparent;
}

@media (max-width: 998px) {
  
  .border-right {
    border-right: 0px !important;
  }
}
</style>