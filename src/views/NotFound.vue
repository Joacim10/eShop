<template>
  <div class="bg-not-found">
    <div class="container">
      <!-- <h1>404</h1> -->

      <div class="row justify-content-center">
        <div class="col-6 mt-5">
          <img src="/Image/NotFound/404.png" alt class="img-fluid" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 mb-5 mt-5">
          <!--  -->
          <div class="text-center">
            <p class="f-24 font-weight-medium f-roboto">Oops! The page you are looking for doesn't exist.</p>
          </div>
          <!--  -->
          <div class="d-flex justify-content-center">
            <!-- <button
              class="btn rounded-pill   btn-outline-secondary themeBg text-light border-0 pl-4 pr-4"
              type="button"
            >
              <router-link to="/" class="text-light">HOME</router-link>
            </button>
            <button class="btn rounded-pill bgDarkBlue text-light btn-contact ml-4 pl-4 pr-4 ">
              <router-link to="/contact" class="text-light">CONTACT US</router-link>
              </button> -->

              <router-link to="/" class="text-light btn rounded-pill   btn-outline-secondary themeBg text-light border-0 pl-4 pr-4">HOME</router-link>

              <router-link to="/contact" class="btn rounded-pill bgDarkBlue text-light btn-contact ml-4 pl-4 pr-4">CONTACT US</router-link>




          </div>

          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>

<style scoped>
.bg-not-found {
  background-color: #f6f6f6;
}

.btn-contact:hover{
  background-color: #182674 !important;
}

</style>
