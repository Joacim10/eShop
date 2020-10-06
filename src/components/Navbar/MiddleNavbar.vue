<template>
  <div class="container">
    <div class="row mt-4 d-flex justify-content-between">
      <div class="mt-2 mr-5 ml-4">
        <router-link to="/"><img class="centerElement" src="/image/navigation/Logo.png"></router-link>
      </div>

      <!-- Sökruta start -->
      <form class="input-group col-6 d-none d-xl-flex mr-3" v-on:submit.prevent="search">
        <input class="inputHeader form-control" type="text" ref="input" placeholder="Search here" >
        <div class="input-group-append">
          <select ref="selectCategory" class="btn border form-control" id="categories" name="categories">
            <option value="" class="dropdown-item" >{{ $t("nav.categories") }}</option>
            <option value="Men" class="dropdown-item" >Men's</option>
            <option value="Women" class="dropdown-item" >Women's</option>
            <option value="Kids" class="dropdown-item" >Kids</option>
            <option value="Hats" class="dropdown-item" >Hats</option>
            <option value="Sunglasses" class="dropdown-item" >Sunglasses</option>
            <option value="Shoes" class="dropdown-item" >Shoes</option>
            <option value="Watches" class="dropdown-item" >Watches</option>
          </select>
          <div class="input-group-append">
            <button class="btn border btnRoundRight themeBg text-white" type="submit" >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

       <!-- Sökruta end -->

      <div class="mt-2 d-none d-sm-block">
        <router-link to="/account"><i class="fa-lg mr-2 far fa-user text-dark"></i></router-link>
        <router-link to="/account"><span class="mr-4 text-dark">{{ $t("nav.account") }}</span></router-link>
        <router-link to="/wishlist"><i class="text-dark fa-lg ml-3 far fa-heart position-relative"><span class="badge themeBg rounded-pill badge-primary position-absolute badge__">{{wishlistItemCount}}</span></i></router-link>
        <router-link to="/compare"><i class="text-dark fa-lg ml-3 fas fa-random position-relative"><span class="badge themeBg rounded-pill badge-primary position-absolute badge__">{{compareItemCount}}</span></i></router-link>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MiddleNavbar',
  data: function () {
    return {
     
    }
  },
  methods: {
    ...mapActions(['newSearch']),
    search (e) {
      e.preventDefault()
      if (this.$refs.input !== undefined) {
        let input = this.$refs.input.value
        let selectCategory = ''
        if (this.$refs.selectCategory !== undefined) {
          selectCategory = this.$refs.selectCategory.value
        }
        this.newSearch({input, selectCategory})
        this.$refs.input.value = ''
        if (this.$router.history.current.path !== '/products' ) {
          this.$router.push({path: '/products'})
        }
        if (this.$router.history.current.query.category || this.$router.history.current.query.filter) {
          this.$router.push({path: '/products'})
        }
      }
    }
  },
  computed: {
    ...mapGetters(['wishlistItemCount','shoppingCartItemCount','shoppingCartTotal', 'compareItemCount'])
  }
};
</script>

<style >
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