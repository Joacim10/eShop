<template>
  <div>
    <div class="border-top mt-4">
      <div class="container">
        <nav class="navbar-expand-lg navbar-light pt-0 pb-0">
          <button
            class="navbar-toggler border-0 pl-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto hoverNav">
              <li class="nav-item dropdown themeBg mr-3 px-2 py-1 d-none d-xl-block">
                <a
                  class="nav-link text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img class="mr-1 mb-1" src="/image/navigation/HamburgerPhoto.png" />
                  <span class="mr-2 ">{{ $t("nav.browse") }}</span>
                  <i class="ml-4 fas fa-angle-down"></i>
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Men' }}"
                  >Men's</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Women' }}"
                  >Women's</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Kids' }}"
                  >Kids</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Hats' }}"
                  >Hats</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Sunglasses' }}"
                  >Sunglasses</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Shoes' }}"
                  >Shoes</router-link>
                  <router-link
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Watches' }}"
                  >Watches</router-link>
                </div>
              </li>
              <li class="nav-item active ml-xl-4 mt-1">              
                <router-link class="nav-link darkBlue active pl-0" to="/" >               
                  {{ $t("nav.home") }}
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item ml-4 mt-1">
                <div
                  class="nav-link darkBlue"
                  id="shopDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  
                >
                  {{ $t("nav.shop") }}
                  <i class="theme ml-1 fas noArrow fa-angle-down"></i>
                </div>
                <div class="dropdown-menu" aria-labelledby="shopDropdown">
                  <router-link class="dropdown-item" to="/shoppingcart"  >Shoppingcart</router-link>
                  <router-link class="dropdown-item" to="/wishlist" >Wishlist</router-link>
                  <router-link class="dropdown-item" to="/compare" >Compare</router-link>
                </div>
              </li>
              <li class="nav-item ml-4 mt-1">
                <router-link class="nav-link darkBlue" to="/products" >{{ $t("nav.products") }}</router-link>
              </li>
              <li class="nav-item dropdown ml-4 mt-1">
                <div
                  class="nav-link darkBlue"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ $t("nav.categories") }}
                  <i class="theme ml-1 fas noArrow fa-angle-down"></i>
                </div>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Men' }}"
                  >Men's</router-link>
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Women' }}"
                  >Women's</router-link>
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Kids' }}"
                  >Kids</router-link>
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Hats' }}"
                  >Hats</router-link>
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Sunglasses' }}"
                  >Sunglasses</router-link>
                  <router-link 
                    class="dropdown-item"
                    :to="{ path: '/products', query: { category: 'Shoes' }}"
                  >Shoes</router-link>
                  <router-link
                    class="dropdown-item" 
                    :to="{ path: '/products', query: { category: 'Watches' }}"
                  >Watches</router-link>
                </div>
              </li>
              <li class="nav-item dropdown ml-4 mt-1">
                <div
                  class="nav-link darkBlue"
                  id="pagesNavbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ $t("nav.pages") }}
                  <i class="theme ml-1 fas noArrow fa-angle-down"></i>
                </div>
                <div class="dropdown-menu" aria-labelledby="pagesNavbarDropdown">
                  <router-link class="dropdown-item" to="/about">About Us</router-link>
                  <router-link class="dropdown-item" to="/team">Team</router-link>
                  <router-link class="dropdown-item" to="/portfolio">Portfolio</router-link>
                  <router-link class="dropdown-item" to="/contact">Contact Us</router-link>
                </div>
              </li>
              <li class="nav-item mt-1 ml-4">
                <router-link class="nav-link darkBlue" to="/blog" >Blog</router-link>
              </li>
              
            </ul>
            
            <div class="my-2 my-lg-0">
              <button v-on:click="specialOffers"
                class="btn btnTheme px-3 btnRadius btnCollapse"
                type="submit"
              >{{ $t("nav.special") }}</button>
            </div>

      <!-- Sökruta start -->
       <div class="container d-lg-none pb-4 pt-3">
      <form class="input-group d-flex  mr-3" v-on:submit.prevent="search">

        <input class="inputHeader form-control" type="text" ref="input" placeholder="Search here" >
        <div class="input-group-append">
          <select ref="selectCategory" class="btn border form-control" id="categories2" name="categories2">
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
      </div> 
       <!-- Sökruta end -->

          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['newSearch', 'resetSearch']),
    specialOffers() {
      this.resetSearch()
      this.$router.push({ path: '/products', query: { filter: 'Discount' }})
    },
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
    ...mapGetters(['compareItemCount'])
  },
  watch: {
    '$route' () {
      $('#navbarSupportedContent').collapse('hide');
    }
  }
};
</script>

<style scoped>
.btnRadius {
  border-radius: 20px;
  font-weight: 600;
}
.hoverNav a:hover {
  border: none;
  /* border-bottom: 2px solid var(--theme)!important; */
}

@media (max-width: 980px) {
  .noArrow {
    display: none;
  }
  .btnCollapse {
    margin-left: 20px !important;
  }
}
</style>