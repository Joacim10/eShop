<template>
  <form class="container mt-5 lightBg py-2 rounded">
    <div class="form-group py-2 px-4">
      <div>
        <h4 class="mt-2 mb-3 text-center text-md-left">LOGIN</h4>
      </div>
      <!-- login ok or not -->
      <p v-if="message" class="f-24" >{{message}}</p>
      <!--  -->
      <label class="mb-1" for="logUserNameOrEmail">
        Username or email
        <span class="theme">*</span>
      </label>
      <input
        type="email"
        class="form-control"
        id="logUserNameOrEmail"
        placeholder="Username or email"
        v-model="userNameOrEmail"
        v-on:blur="$v.userNameOrEmail.$touch()"
      />
      <p v-if="$v.userNameOrEmail.$error">
        <small>please type valid username or email</small>
      </p>
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="logPassWord">
        Password
        <span class="theme">*</span>
      </label>
      <input
        type="password"
        class="form-control"
        id="logPassWord"
        placeholder="Password"
        v-model="passWord"
        v-on:blur="$v.passWord.$touch()"
      />
      <p v-if="$v.passWord.$error">
        <small>please type your password</small>
      </p>
    </div>
    <div class="form-group py-2 px-4 container">
      <!--            container -->
      <div class="mt-3 row align-items-center justify-content-center">
        <button
          class="col-11  py-2 btnTheme px-5 border-0 text-white"
          v-on:click.prevent="submitForm"
          v-bind:disabled="$v.$invalid"
          v-bind:class="{btndisabled: $v.$invalid}"
        >LOG IN</button>
      </div>
    </div>

    <div class="form-group px-4">
      <div class="form-check mt-3 d-flex justify-content-between">
        <input
          type="checkbox"
          class="form-check-input"
          id="checkBoxRememberMe"
          v-model="chBoxRememberMe"
          v-bind:disabled="$v.$invalid"
        />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
        <!-- <p> {{chBoxRememberMe}} </p> -->
        <p class="theme">Lost your account?</p>
      </div>
    </div>

    <div class="form-group row px-3">
      <div class="col-4">
        <hr />
      </div>
      <div class="col-4">
        <p>OR LOGIN WITH</p>
      </div>
      <div class="col-4">
        <hr />
      </div>
    </div>

      <!-- form-group px-3  justify-content-around justify-content-center-->
    <div class="  row px-3  align-items-center justify-content-around ">
      <!--                       ml-4   mr-3   -->
      <div class="col-8 col-lg-5 mb-2 mb-lg-0 facebookBg text-white py-2  d-flex rounded">
        <i class="fab fa-facebook-square fa-2x"></i>
        <span class="ml-5 pr-2 mt-1">Facebook</span>
      </div>
      <!--                         mr-3   -->
      <div class="col-8 col-lg-5 bg-primary text white rounded text-white py-2  d-flex">
        <i class="fab fa-google fa-2x"></i>
        <span class="ml-5 pr-2 mt-1">Google</span>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userNameOrEmail: "",
      // email: "",
      passWord: "",
      chBoxRememberMe: "",
      submitted: false,
      message: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),

    async submitForm() {
      if (this.userNameOrEmail != "" && this.passWord != "") {

        const response = await this.loginUser({
          userNameOrEmail: this.userNameOrEmail,
          passWord: this.passWord,
        });

        // om allt ok
        if (response.statusCode == 200) {
          console.log("login submitted");

          // rensa inmatningsfält
          this.userNameOrEmail = "";
          this.passWord = "";
          this.chBoxRememberMe = false;
          this.$v.$reset;
          
          // gå till shop ?  lås upp köpknappen ?
          this.returnUrl = this.$route.query.returnUrl || '/'
          this.$router.push(this.returnUrl)

        } else{
        this.message = `login failed: ${response.message}`;
        }

        
        
      }
    },
  },
  validations: {
    userNameOrEmail: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
    passWord: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
  },
};
</script>

<style scoped>
.form-control {
  border: 0;
}
.facebookBg {
  background-color: #3b5998;
}

/* klasser för vuelidate */
.invalid {
  border: 1px solid #f77272 !important;
  background-color: #f8b1b1 !important;
}
.valid {
  background-color: #6fffab !important;
}

.btndisabled {
  background-color: #8ab8b3 !important;
}
</style>