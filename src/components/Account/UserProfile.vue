<template>
  <div class="container mt-5 mb-5">
    <!-- <h3>User profile here</h3> -->
    <div class="row">
      <div class="col">
        <div class="card p-2">
          <p>Username: {{ user.userName }}</p>
          <p>Email: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserProfile",

  computed: {
    ...mapGetters(["isUserLoggedIn", "user"]),
  },
};
</script>

<style>
</style>