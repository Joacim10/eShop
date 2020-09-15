<template>
<div>
  <div class="border-top mt-4">
            <div class="container">
                <nav class=" navbar-expand-lg navbar-light pt-0 pb-0">
                    <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto hoverNav ">
                            <li class="nav-item dropdown themeBg mr-3 px-2 py-1 d-none d-lg-block">
                                <a class="nav-link text-white " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <img class="mr-1 mb-1" src="/image/navigation/HamburgerPhoto.png"> <span class="mr-2 "> Browse Categories</span>  <i class=" ml-4 fas  fa-angle-down"></i></a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li class="nav-item active ml-4 mt-1">
                                <a class="nav-link darkBlue active" to="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown ml-4 mt-1">
                                <a class="nav-link darkBlue " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop <i class=" theme ml-1 fas noArrow fa-angle-down"></i>  </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" to="/shop">Shop</a>
                                   
                                </div>
                            </li>
                            <li class="nav-item dropdown ml-4 mt-1">
                                <a class="nav-link darkBlue " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products <i class=" theme ml-1 fas noArrow fa-angle-down"></i></a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown ml-4 mt-1">
                                <a class="nav-link darkBlue " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories <i class=" theme ml-1 fas noArrow fa-angle-down"></i></a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown ml-4 mt-1">
                                <a class="nav-link darkBlue" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages <i class=" theme ml-1 fas noArrow fa-angle-down"></i> </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" to="/wishlist">Wishlist</a>
                                </div>
                            </li>
                            <li class="nav-item mt-1 ml-4">
                                <a class="nav-link darkBlue" href="#">Blog</a>
                            </li>
                            <div class="mt-2 p-0 mb-3 col-12 d-sm-none d-lg-none d-xl-none">
                                <i class=" fa-lg ml-2 mr-2 far fa-user"></i>
                                <span class="mr-4">My Account</span>
                                <i class=" fa-lg ml-3 fas noArrow fa-shopping-bag"></i>
                                <span class="ml-2">$.0.00</span>
                            </div>
                        </ul>
                        <div class="my-2 my-lg-0">
                            <button class="btn themeBg text-white px-3  btnRadius btnCollapse" type="submit"> SPECIAL OFFER</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btnRadius{
  border-radius: 20px;
  font-weight: 600;
  
}
.hoverNav a:hover{
    border-bottom: 2px solid var(--theme)!important;
}

@media (max-width: 980px) {
  .noArrow{
      display: none;
  }
  .btnCollapse{
      margin-left: 20px !important;
    
  }

}
</style>