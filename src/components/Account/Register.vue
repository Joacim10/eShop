<template>
  <form class="mt-5 lightBg py-2 rounded">
    <div class="form-group py-2 px-4">
      <div>
        <h4 class="mt-2 mb-3 text-center text-md-left">REGISTER</h4>
        <p
          class="regText"
        >Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
      </div>
      <!-- message från store/api -->
      <p v-if="message" class="text-success f-24">{{message}}</p>
      <!--  -->
      <label class="mb-1" for="reguserName">
        Username
        <span class="theme">*</span>
      </label>
      <input
        type="text"
        class="form-control"
        id="reguserName"
        placeholder="Enter Username "
        v-model="userName"
        v-on:blur="$v.userName.$touch()"
        v-bind:class="{invalid: ($v.userName.$error && !$v.userName.minLength)  || ($v.userName.$error && !$v.userName.maxLength) }"
      />
      <p v-if="!$v.userName.minLength || !$v.userName.maxLength"
      >please use between {{$v.userName.$params.minLength.min}} and {{$v.userName.$params.maxLength.max}} char.</p>
      <!-- <p> {{$v.userName}} </p> -->
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="regEmail">
        Email address
        <span class="theme">*</span>
      </label>
      <input
        type="email"
        class="form-control"
        id="regEmail"
        placeholder="Enter a valid email"
        v-model="email"
        v-on:blur="$v.email.$touch()"
        v-bind:class="{invalid: ($v.email.$error && $v.email.required) || ($v.email.$error && !$v.email.maxLength)  }"
      />
      <p v-if="!$v.email.email">please add valid email</p>
      <p  v-if="!$v.email.maxLength" >Please use max {{$v.email.$params.maxLength.max}} char.</p>
      <!-- <p> {{$v.email}} </p> -->
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="regPassWord">
        Password
        <span class="theme">*</span>
      </label>
      <input
        type="password"
        class="form-control"
        id="regPassWord"
        placeholder="Password"
        v-model="passWord"
        v-on:blur="$v.passWord.$touch()"
        v-bind:class="{invalid: ($v.passWord.$error && !$v.passWord.minLength) || ($v.passWord.$error && !$v.passWord.maxLength) }"
      />
      <!-- <p v-if="!$v.passWord.minLength" >please add minimum {{$v.passWord.$params.minLength.min}} char.</p> -->
      <p v-if="!$v.passWord.minLength || !$v.passWord.maxLength"
      >please use between {{$v.passWord.$params.minLength.min}} and {{$v.passWord.$params.maxLength.max}} char.</p>
    </div>

    <div class="form-group py-2 px-4">
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our</p>
    </div>

    <div class="form-group container px-4">
      <div class="row align-items-center justify-content-center">
        <button
          class="col-11 py-2 btnTheme px-5 border-0 text-white text-uppercase"
          v-bind:disabled="$v.$invalid"
          v-bind:class="{btndisabled: $v.$invalid}"
          v-on:click.prevent="submitForm"
        >Register</button>
      </div>
    </div>

    <!-- test -->
    <!-- <p> {{userName}} </p> <p> {{email}} </p> <p> {{passWord}} </p>  -->
    <!-- test -->
  </form>
</template>

<script>
// import axios from "axios";
// vuelidate
import { required, email, minLength, maxLength } from "vuelidate/lib/validators";

// store
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      userName: "",
      email: "",
      passWord: "",
      submitted: false,
      message: "",
    };
  },

  methods: {
    ...mapActions(["registerUser"]),

    async submitForm() {

      if (this.userName != "" &&
        this.email != "" &&
        this.passWord != "") {

          const user = {
          userName: this.userName,
          email: this.email,
          passWord: this.passWord
        };
        // skicka user till mongodb med axios
        const response = await this.registerUser(user);
        console.log(response.statusCode);

        // kontrollera om det gick att registrera en användare
        if (response.statusCode == 201) {

            console.log("register submitted");
            this.userName="";
            this.email="";
            this.passWord="";
            this.$v.$reset;

          // gå till inloggning / kan kanske lägga till funktion för direkt inloggning
          // this.$router.push("/login");

          // test
          this.message = "User created";
          setTimeout(()=>{
            this.message = "";
          }, 3000);

          // 
        } else {
          // det gick inte att registrera användare  Kunde inte registrera användare
          this.message = "Could not create user"
        }
        
      }
    },

  },

  validations: {
    userName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email,
      minLength: minLength(4),
      maxLength: maxLength(50),
      unique: (val)=>{
          if(val ==='') return true;
          // här kan man kontakta databas och se om email redan finns
          return val !== 'test@test.com'
      }
    },
    passWord: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
  },
   computed: {
    ...mapGetters(["messages"])
  }
};
</script>

<style scoped>
.regText {
  color: #777777 !important;
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