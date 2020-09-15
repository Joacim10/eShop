<template>

<div>
   <TopNavbar />
   <MiddleNavbar />
   <BottomNavbar />
</div>
  
</template>

<script>
import TopNavbar from './Navbar/TopNavbar'
import MiddleNavbar from './Navbar/MiddleNavbar'
import BottomNavbar from './Navbar/BottomNavbar'


export default {
  name: 'navbar',
  components:{
    TopNavbar,
    MiddleNavbar,
    BottomNavbar,
   
  }
}
  
</script>

<style>

</style>