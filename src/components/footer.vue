<template>
  <div>
    <div class="container my-5 d-none d-sm-block">
      <div
        class="d-none d-lg-flex justify-content-between align-items-center flex-wrap"
      >
        <img src="/Image/Brand/Bexim.png" alt="" />
        <img src="/Image/Brand/Lighton.png" alt="" />
        <img src="/Image/Brand/Dismis.png" alt="" />
        <img src="/Image/Brand/Rosimo.png" alt="" />
        <img src="/Image/Brand/Dallas.png" alt="" />
      </div>
      <div class="d-lg-none row">
        <div class="col-12 text-center">
          <img class="pr-5" src="/Image/Brand/Bexim.png" alt="" />
          <img src="/Image/Brand/Lighton.png" alt="" />
        </div>
        <div class="col-12 text-center">
          <img class="pr-5 py-2" src="/Image/Brand/Dismis.png" alt="" />
          <img src="/Image/Brand/Rosimo.png" alt="" />
        </div>
        <div class="col-12 text-center">
          <img src="/Image/Brand/Dallas.png" alt="" />
        </div>
      </div>
    </div>

    <div class="background borderTop">
      <button
        v-on:click="scrollToTop"
        class="btn text-white d-none d-sm-block float-right mr-3 mt-3 themeBg"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
      <div class="overlay">
        <div class="container">
          <div class="row text-white py-5">
            <div class="col-6 col-sm-4 col-lg-3">
              <img class="pb-4" src="/Image/Navigation/LogoWhite.png" alt="" />
              <p class="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent enim quam, ullamcorper vel tellus vitae, tempus
                fringilla lectus. Donec maximus justo eu nisl convallis iaculis.
                Aenean laoreet.
              </p>
              <p>Follow us</p>
              <div class="theme f-18">
                <a class="text-white mr-3">
                  <i class="fab fa-facebook-f"></i
                ></a>
                <a class="text-white mr-3"> <i class="fab fa-twitter"></i></a>
                <a class="text-white mr-3"> <i class="fab fa-instagram"></i></a>
                <a class="text-white mr-3">
                  <i class="fab fa-pinterest-p"></i
                ></a>
                <a class="text-white mr-2"> <i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              <p class="theme f-18 font-weight-bold pb-4">CONTACT INFO</p>
              <div class="mb-2">
                <p class="theme f-16">Address:</p>
                <p class="f-16">Solna Business Park</p>
                <p class="f-16">Feni-2500, Stockholm</p>
              </div>
              <div class="my-2">
                <p class="theme f-16">Phone:</p>
                <p class="f-16">+08-123456789</p>
                <p class="f-16">+08-123456789</p>
              </div>
              <div class="my-2">
                <p class="theme f-16">Email:</p>
                <p class="f-16">support@website.com</p>
                <p class="f-16">info@website.com</p>
              </div>
            </div>
            <div class="col-6 d-none d-sm-block col-sm-4 col-lg-3">
              <p class="theme f-18 pb-4">USEFUL LINKS</p>
              <ul class="pl-0 list-unstyled">
                <li class="whiteDark">
                  <a href="#" class="f-16">Privacy Policy</a>
                </li>
                <!-- <li class="whiteDark"><a href="#" class="f-16">Terms & Conditions</a></li> -->
                <li class="whiteDark">
                  <a
                    type="button"
                    class="btn-link whiteDark"
                    v-on:click.prevent="
                      toggleModal({ modalType: 'terms&conditions' })
                    "
                    >Terms & Conditions</a
                  >
                </li>
                <li class="whiteDark">
                  <a href="#" class="f-16">Contact Us</a>
                </li>
                <li class="whiteDark">
                  <a href="#" class="f-16">Our Sitemap</a>
                </li>
                <li class="whiteDark">
                  <a href="#" class="f-16">Latest News</a>
                </li>
                <li class="whiteDark"><a href="#" class="f-16">Returns</a></li>
              </ul>
            </div>
            <div class="col-6 d-none d-lg-block col-lg-3">
              <p class="theme f-18 pb-4">RECENT INSTAGRAM</p>
              <div id="box" class="d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-between h-33">
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                </div>
                <div class="d-flex justify-content-between h-33">
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                  <div
                    class="mr-1 w-100 h-100 bg-info text-center d-flex flex-column justify-content-center"
                  >
                    <div>
                      <a class="text-white">
                        <i class="fab fa-instagram f-24"></i
                      ></a>
                    </div>
                  </div>
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                </div>
                <div class="d-flex justify-content-between h-33">
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                  <div class="mr-1 w-100 h-100 bgGrey"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black text-white">
        <div class="container">
          <div class="d-flex justify-content-between py-3">
            <div>© Copyright 2020 KenKata</div>
            <div class="d-none d-md-block">
              <img src="/image/Payment/Payment system.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// jm
import { mapActions } from "vuex";

export default {
  components: {},

  methods: {
    ...mapActions(["toggleModal"]),

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.borderTop {
  border-top: 3px solid var(--theme);
}

.bgGrey {
  background-color: var(--grey);
}

.background {
  background-color: var(--darkBlue) !important;
}
.overlay {
  background-color: rgba(115, 108, 156, 0.091);
}
p {
  margin-bottom: 0.1rem !important;
}
ul > li {
  margin: 0 0 15px 0;
}
#box {
  height: 254px;
  width: 255px;
}
.h-100 {
  min-height: 82px;
}
@media only screen and (max-width: 360px) {
  .f-16 {
    font-size: 14px;
  }
}
</style>