<template>
  <div class="customtooltip">
    <!-- här visas det man lagt innanför tag/component -->
    <slot></slot>
    <!-- tag/component end -->
    <!-- här visas den text som skickas in -->
    <div v-show="show">
      <div class="customtooltiptext">
        <div v-for="(input, index) in customInputData" :key="index">
          <div v-show="input.data == false">
           <p class="px-2 py-0 my-0 font-weight-light">{{ input.text }}</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customInputData: {
      type: Array,
    },
    show: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },

  computed: {},
};
</script>

<style>
.customtooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
}

.customtooltip .customtooltiptext {
  visibility: hidden;
  min-width: 250px;
  background-color: var(--darkBlue);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -125px;
}

.customtooltip .customtooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--darkBlue) transparent transparent transparent;
}

.customtooltip:hover .customtooltiptext {
  visibility: visible !important;
}
</style>