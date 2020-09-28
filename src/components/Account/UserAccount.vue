<template>
  <div class="container">
    <h5>Click Profile or Orders to see detalis</h5>

    <!-- <div>
      <router-link to="/account/userProfile">Profile</router-link>
      <router-link to="/account/userOrders">Orders</router-link>
    </div> -->


    <nav class="">
      <div
        class="flex-column flex-sm-row nav nav-tabs"
        id="nav-tab"
        role="tablist"
      >
        <router-link
        to="/account/userProfile"
          class="text-center flex-fill flex-lg-grow-0 nav-link  mr-1 mt-1"
          id="nav-Profile-tab"
          data-toggle="tab"
          
          role="tab"
          aria-controls="nav-Profile"
          aria-selected="false"
          >Profile</router-link
        >
        <router-link
        to="/account/userOrders"
          class="text-center flex-fill flex-lg-grow-0 nav-link mr-1 mt-1"
          id="nav-Orders-tab"
          data-toggle="tab"
          
          role="tab"
          aria-controls="nav-Orders"
          aria-selected="false"
          >Orders</router-link
        >
        
        
      </div>
    </nav>



    <!-- views -->
    <div>
      <router-view> </router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserAccount"
};
</script>

<style  scoped>
.nav-link {
  background-color: var(--darkBlue);
  color: var(--white);
}

.nav-tabs .nav-link.active {
  background-color: var(--theme);
  color: var(--white);
}

.nav-tabs {
  border-bottom: 2px solid var(--theme);
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.bgForm {
 background: #F6F6F6;
}

</style>