<template>
  <!-- The Modal -->
  <div id="myModal" class="modal" v-on:click.self="toggleModal({modalType: '', data: {}})">

    <!-- Modal content -->
    <div class="modal-content container" v-on:click.stop>
      <div>
        <p v-on:click="toggleModal({modalType: '', data: {}})" class="close">&times;</p>
      </div>

      <QuickView v-if="modalType === 'quickView'" :product="modalData"/>

      <MessageModal v-if="modalType === 'textMessage'" :messageData="modalData" :buttonText="'OK'" />

      <!-- Den här taggen kan bytas ut mot annan komponents tag. Glöm ej import av komponent -->
      <p v-if="modalType === 'someOtherComponent'" :data="modalData"/>

    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuickView from '@/components/Modal/QuickView.vue';
// jm
import MessageModal from './MessageModal.vue';

export default {
  components: {
    QuickView,
    MessageModal,
  },
  data() {
    return {
      show: '1'
    }
  },
    methods: {
    ...mapActions(['toggleModal']),
  
  },
  computed: {
    ...mapGetters(['modalType', 'modalData']),
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 500; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>