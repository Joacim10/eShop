<template>
  <form class="mt-5 lightBg py-2 rounded">
    <div class="form-group py-2 px-4">
      <div>
        <h4 class="mt-2 mb-3">LOGIN</h4>
      </div>
      <label class="mb-1" for="exampleInputEmail1">Username or email <span class="theme">*</span></label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>

    <div class="form-group py-0 px-4">
      <label class="mb-1" for="exampleInputPassword1">Password <span class="theme">*</span></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-group py-2 px-4">
      <div class="mt-3 row container">
        <button class="col-12 py-2 btnTheme px-5 border-0 text-white">LOG IN</button>
      </div>
    </div>

    <div class="form-group px-4">
      <div class="form-check mt-3 d-flex justify-content-between">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Remeber me</label>
        <p class="theme">Lost your account?</p>
      </div>
    </div>

    <div class="form-group row px-3">
        <div class="col-4">
            <hr>
        </div>
        <div class="col-4">
            <p>OR LOGIN WITH</p>
        </div>
        <div class="col-4">
            <hr>
        </div>
    </div>

    <div class="form-group px-3 row">
        <div class="col-5 ml-4 facebookBg text-white py-2 mr-3 d-flex rounded">
           <i class="fab fa-facebook-square fa-2x"></i>
           <span class="ml-5 mt-1"> Facebook</span>
        </div>
        <div class="col-5 bg-primary text white rounded text-white py-2 mr-3 d-flex">
           <i class="fab fa-google fa-2x"></i>
            <span class="ml-5 mt-1"> Google</span>
        </div>
    </div>

  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.form-control {
  border: 0;
}
.facebookBg{
    background-color: #3B5998;
}
</style>