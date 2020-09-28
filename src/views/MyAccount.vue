<template>
  <div class=" mt-5">
    <MyAccountBread />
    <div v-if="isUserLoggedIn">
      <div class="container">
        <div class="row justify-content-center align items-center d-flex">
          <div class="col-5">
            <h4 class="mt-3 mb-3"> {{user.userName}} is logged in</h4>
          </div>
          <!-- <div class="row"> -->
              <div class="col-5 align items-center d-flex">
                <!-- col-lg-auto  btnTheme text-uppercase class="btn themeBg white text-uppercase  text-bold p-0"-->
                <button
              
              class="  btn btnTheme text-white"
              v-on:click.prevent="onClickLogOut" >
              Logout
            </button>
              </div>
            <!-- </div> -->

        </div>
        <div class="row">
          <!--  -->
          <UserAccount />
        </div>
      </div>
    </div>
    <div v-else>
      <DefaultAccountView />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MyAccountBread from '../components/BreadCrumbs/MyAccountBread'
import DefaultAccountView from "../components/Account/DefaultAccountView";
import UserAccount from "../components/Account/UserAccount";

export default {
  name: "MyAccount",
  components: {
    MyAccountBread,
    DefaultAccountView,
    UserAccount,
  },
  methods:{
    // ,'getCurrentUser',"clearAllCartItem"
    ...mapActions(['logOutUser']),

    onClickLogOut(){
      this.logOutUser();
      // gå tillbaka till produkter
          this.returnUrl = this.$route.query.returnUrl || '/'
          this.$router.push(this.returnUrl)
    }
  },
  computed: {
    ...mapGetters(["isUserLoggedIn", "user"]),
  },
};
</script>