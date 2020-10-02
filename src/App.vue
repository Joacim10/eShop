<template>
  <div id="app">
    <Navbar/>  
    <router-view/>
    <Footer/>
    <Modal v-if="showModal === true"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
import Modal from '@/components/Modal/Modal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Modal
  },
  methods: {
    ...mapActions(['getAllProducts'])
  },
  created() {
    this.getAllProducts();
  },
  computed: {
    ...mapGetters(['showModal']),
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

:root{
  --theme: #20D3C2;
  --sale: #64CB83;
  --hot: #FE4545;
  --lightGrey: #f6f6f6;
  --productBG: #eeeeee;
  --line: #e3e3e3;
  --grey: #aaaaaa;
  --mediumGrey: #cccccc;
  --white: #ffffff;
  --darkBlue: #0E153D;
  --mediumBlue:  #0e153dd7; /* 85%*/
}

/* colors */
.white{
color: var(--white) !important;
}
.white a{
color: var(--white) !important;
}
.white a:hover{
color: var(--darkBlue) !important;
}

.whiteDark{
color: var(--white) !important;
}
.whiteDark a{
color: var(--white) !important;
}
.whiteDark a:hover{
color: var(--theme) !important;
}

.darkBlue{
color: var(--darkBlue) !important;
}
.darkBlue a{
color: var(--darkBlue) !important;
}
.darkBlue a:hover{
color: var(--theme) !important;
}
.bgWhite{
  background: var(--white);
}

.theme{
color: var(--theme);
}
.theme a{
color: var(--theme) !important;
}
.theme a:hover{
color: var(--white) !important;
}

.themeBg{
background-color: var(--theme);
}
.bgDarkBlue{
  background-color: var(--darkBlue) !important;
}

.bgMediumBlue{
  background-color: var(--mediumBlue) !important;
}


.bgMediumGrey{
  background-color: var(--mediumGrey);
}

.lightBg{
  background-color: var(--lightGrey);
}
.bgGrey{
  background-color: var(--grey);
}

.grey {
color: var(--grey) !important;
}

.grey a{
color: var(--grey) !important;
}



.btnTheme{
background-color: var(--theme);
border-radius: 25px;
}
.btnTheme:hover{
  background-color: #3eb9ad !important;
}

.btnWhite{
background-color: var(--white);
border-radius: 25px;
color: var(--theme);
}

.btnWhite:hover{
background-color: var(--theme);
border-radius: 25px;
color: var(--white);
}

.productBg{
background-color: var(--productBG);
}
/* Colors */

.f-14 {
  font-size: 0.875rem !important;
}
.f-16 {
  font-size: 1rem !important;
}
.f-18 {
  font-size: 1.125rem !important;
}
.f-24 {
  font-size: 1.5rem !important;
}
.f-36 {
  font-size: 2.25rem !important;
}
.f-60 {
  font-size: 4rem !important;
}

.font-weight-medium {
  font-weight: 500;
}

.f-play {
  /* font-family: play !important; */
  font-family: 'Play', sans-serif !important;
}
.f-roboto {
  /* font-family: play !important; */
  font-family: "Roboto", sans-serif !important;
}


 body {
  font-family: 'Roboto', sans-serif;
} 




.zigzag {
  width: 300px;
  height: 10px;
  border: none;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  background-repeat: repeat-x;
  background-position: center;
  background-color: transparent;
  background-image: url('/Image/zigzag.png');
}

.cursorNormal{
  cursor: default;
}

.cursorPointer{
  cursor: pointer;
}



</style>
