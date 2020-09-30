<template>
  <div class="">
    <MyAccountBread />



    <div class="mt-3" v-if="isUserLoggedIn">
      <div class="container">
        <!--             justify-content-center d-flex   -->
        <div class="row align-items-center">
          <div class="col-6">
            <h4 class="mt-3 mb-3">You are logged in as {{ user.userName }}</h4>
          </div>
          <!-- <div class="row">   d-flex-->
          <div class="col-6 align-items-center">
            <!-- -->
            <button
              class="btn btnTheme rounded-pill text-white"
              v-on:click.prevent="onClickLogOut"
            >
              Logout
            </button>
            <!-- -->
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
import MyAccountBread from "../components/BreadCrumbs/MyAccountBread";
import DefaultAccountView from "../components/Account/DefaultAccountView";
import UserAccount from "../components/Account/UserAccount";

export default {
  name: "MyAccount",
  components: {
    MyAccountBread,
    DefaultAccountView,
    UserAccount,
  },
  methods: {
    // ,'getCurrentUser',"clearAllCartItem"
    ...mapActions(["logOutUser"]),

    onClickLogOut() {
      this.logOutUser();
      // gå tillbaka till produkter
      this.returnUrl = this.$route.query.returnUrl || "/";
      this.$router.push(this.returnUrl);
    },
  },
  computed: {
    ...mapGetters(["isUserLoggedIn", "user"]),
  },
};
</script>

<style scoped>


</style>