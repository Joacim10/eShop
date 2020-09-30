<template>
  <div class="container">
    <div class="row">
      <!---LOGIN COMPONENT --->
      <div class="col-lg-6 col-md-12">
        <Login />
      </div>
      <!---REGISTER COMPONENT --->
      <div class="col-lg-6 col-md-12">
        <Register />
      </div>
       
       
    </div>
  </div>
</template>

<script>
// import Login from '../components/Account/Login'
// import Register from '../components/Account/Register'
import Login from './Login'
import Register from './Register'

export default {
  name: "DefaultAccountView",
  components: {
    Login,
    Register
  },
};
</script>