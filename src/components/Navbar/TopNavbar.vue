<template>
  <div class="themeBg d-none d-xl-block">
            <div class="container d-flex justify-content-between d-none">
                <nav class="navbar navbar-expand-lg  py-0 px-0 ">
                    <ul class="navbar-nav mr-auto border-right ">

                        <li class="nav-item dropdown d-none d-sm-block">


                             <div class="locale-switcher mt-2">
                                <select class="dropdown-item text-white mt-2 " v-model="$i18n.locale">
                                <option  value="en">ENG</option>
                                <option  value="sv">SWE</option>
                                </select>
                            </div>

                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link  text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                USD <i class="fas fa-angle-down"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white border-right px-3" href="#">{{ $t("nav.newsletter") }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white border-right px-3" href="#">{{ $t("nav.contact") }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white border-right px-3" href="#">FAQs</a>
                        </li>
                    </ul>
                    <div class="ml-2 d-none d-lg-block">
                    <a class="text-white mr-2"> <i class="fab fa-facebook-f"></i></a>
                    <a class="text-white mr-2" > <i class="fab fa-twitter"></i></a>
                    <a class="text-white mr-2" > <i class="fab fa-instagram"></i></a>
                    <a class="text-white mr-2" > <i class="fab fa-pinterest-p"></i></a>
                    <a class="text-white mr-2" > <i class="fab fa-youtube"></i></a>
                </div>
                </nav>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
select {
    padding: 0 !important;
   outline: none;
     
}


.locale-switcher{
    margin-top: 9.3px !important;
    
}
.dropdown-item:hover {
    color: var(--theme) ;
    text-decoration: none;
    
}
.dropdown-item:focus, .dropdown-item:hover {
    color: white;
    text-decoration: none;
    background-color: transparent;
}





</style>