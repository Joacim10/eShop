<template>
  <form class="mt-5 lightBg py-2 rounded">
    <div class="form-group py-2 px-4">
      <div>
        <h4 class="mt-2 mb-3">REGISTER</h4>
        <p class="regText">
         Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.   
        </p>
      </div>
      <label class="mb-1" for="exampleInputEmail1">Username  <span class="theme">*</span></label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="exampleInputPassword1">Email address <span class="theme">*</span></label>
      <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="exampleInputPassword1">Password <span class="theme">*</span></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <div class="form-group py-2 px-4">
        <p>
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our    
        </p>
      </div>

    <div class="form-group px-4">
      <div class=" row container">
        <button class="col-12 py-2 btnTheme px-5 border-0 text-white">LOG IN</button>
      </div>
    </div>


  </form>
</template>

<script>
export default {

}
</script>

<style scoped>
.regText{
    color: #777777 !important;
}
</style>