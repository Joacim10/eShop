<template>
  <div class="container">
    <div class="row mt-4 d-flex">
      <div class="mt-2 mr-5 ml-4">
        <router-link to="/"><img class="centerElement" src="/image/navigation/Logo.png"></router-link>
      </div>

      <div class="input-group col-6 d-none d-xl-flex mr-3">
        <input class="inputHeader form-control" placeholder="Search here">
        <div class="input-group-append">
          <button
            class="btn border dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Categories</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
          </div>
          <div class="input-group-append">
            <button class="btn border btnRoundRight themeBg text-white" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-2 d-none d-sm-block">
        <router-link to="/account"><i class="fa-lg mr-2 far fa-user text-dark"></i></router-link>
        <router-link to="/account"><span class="mr-4 text-dark">My Account</span></router-link>
        <router-link to="/wishlist" class="text-dark"><i class="fa-lg ml-3 far fa-heart"></i></router-link>
        <i class="fa-lg ml-3 fas fa-random position-relative">
          <span class="badge themeBg rounded-pill badge-primary position-absolute badge__">0</span>
        </i>
        <a>
          <router-link to="/shoppingcart"><i class="text-dark fa-lg ml-3 fas fa-shopping-bag position-relative">
            <span class="badge themeBg rounded-pill badge-primary position-absolute badge__">{{shoppingCartItemCount}}</span>
          </i> </router-link>
        </a>
        <span class="ml-2">${{shoppingCartTotal}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
      ...mapGetters(['shoppingCartItemCount',"shoppingCartTotal"])
    }
};
</script>

<style scoped>
.btnRoundRight{

  border-radius: 0px 50px 50px 0px !important;
}
.badge__{
  top: -22px;
  right: -10px;
    
}

.inputHeader {

  border-radius: 30px;
}

@media (max-width: 375px) {
  .centerElement {
    text-align: center;
  }
}
</style>