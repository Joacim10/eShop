<template>
  <div id="app">
    <Navbar/>  
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
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
.f-play {
  font-family: play !important;
}
</style>
