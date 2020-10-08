<template>
    <div class="bread pt-4 pb-3 d-none d-sm-block">
        <div class="container d-flex justify-content-between">
            <div>
                 <p class="theme">Compare</p>
            </div>
            <div>
                <ul class="crumb">
                     <li class="breadcrumb-item active"> <router-link to="/"><small>Home</small></router-link></li>
                     <li class="breadcrumb-item " ><router-link to="/compare" ><small>Compare</small></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bread {
  background-color: #0e153da6;
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