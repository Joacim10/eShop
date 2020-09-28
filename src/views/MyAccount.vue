<template>
    <div>
     <MyAccountBread />
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
  </div>
</template>

<script>
import Login from '../components/Account/Login'
import Register from '../components/Account/Register'
import MyAccountBread from '../components/BreadCrumbs/MyAccountBread'

export default {
  name: "MyAccount",
  components: {
    Login,
    Register,
    MyAccountBread,
    
  },
};
</script>