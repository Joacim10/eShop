<template>
  <div>
    <div class="border-top mt-4">
      <div class="container">
        <nav class="navbar-expand-lg navbar-light pt-0 pb-0">
          <button
            class="navbar-toggler border-0"
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
                  <span class="mr-2 ">{{ $t("nav.brows") }}</span>
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
              <li class="nav-item active ml-4 mt-1">
                <router-link class="nav-link darkBlue active" to="/" >
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
                  <router-link class="dropdown-item" to="/about" >About Us</router-link>
                  <router-link class="dropdown-item" to="/team" >Team</router-link>
                  <router-link class="dropdown-item" to="/portfolio" >Portfolio</router-link>
                </div>
              </li>
              <li class="nav-item mt-1 ml-4">
                <router-link class="nav-link darkBlue" to="/blog" >Blog</router-link>
              </li>
              
            </ul>
            <div class="my-2 my-lg-0">
              <router-link   tag="button" :to="{ path: '/products', query: { filter: 'Discount' }}"
                class="btn themeBg text-white px-3 btnRadius btnCollapse"
                type="submit"
              >{{ $t("nav.special") }}</router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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