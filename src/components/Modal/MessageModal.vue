<template>
  <!-- den här MessageModal tar in ett objekt med text:'' och type:'' -->
  <!-- och :buttonText -->
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-8 text-center">
        <p
          v-bind:class="{
            invalid: messageData.type == 'Error',
            valid: messageData.type == 'Success',
          }"
        >
          {{ messageData.text }}
        </p>
      </div>
      <div class="col-5 text-center">
        <button
          class="col-5 py-2 btnTheme px-5 border-0 text-white text-uppercase"
          v-on:click="toggleModal({modalType: '', data: {}})"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["messageData", "buttonText"],

  methods: {
    ...mapActions(["toggleModal"]),
  },
};
</script>

<style scoped>
.valid {
  color: #0ecc17 !important;
}
.invalid {
  color: #f77272 !important;
}
</style>