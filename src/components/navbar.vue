<template>

<div>
   <TopNavbar />
   <MiddleNavbar />
   <BottomNavbar />
</div>
  
</template>

<script>
import TopNavbar from './TopNavbar'
import MiddleNavbar from './MiddleNavbar'
import BottomNavbar from './BottomNavbar'


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