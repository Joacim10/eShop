<template>
  <div class="">
    <div v-if="isUserLoggedIn">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <h3 class="mt-3 mb-3">User logged in</h3>
            <button
              class="btn btnTheme white col-lg-auto text-uppercase text-bold"
              v-on:click.prevent="onClickLogOut" >
              Logout
            </button>
          </div>
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
// import Login from '../components/Account/Login'
// import Register from '../components/Account/Register'

import DefaultAccountView from "../components/Account/DefaultAccountView";
import UserAccount from "../components/Account/UserAccount";

export default {
  name: "MyAccount",
  components: {
    // Login,
    // Register
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