<template>
<div>
  <div class="bgDarkBlue">
    <div class="text-center pt-4 pb-2">
        <nav class="container" aria-label="breadcrumb">
            <ol class="breadcrumb bgDarkBlue">
                <li class="mr-auto">
                <router-link class="theme active f-24" to="/Contact">Contact</router-link>
                </li>
                <li class="ml-auto">
                <router-link class="theme active" to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item ml-1 text-white" aria-current="page">/ Contact</li>
            </ol>
        </nav>
    </div>
  </div>
  <ContactUs />
</div>
</template>

<script>
import ContactUs from '../components/Contact/ContactUs';
  export default {
    name: "Contact",
    components: {
      ContactUs
    }
  }
</script>

<style scoped>
.active {
    color: var(--theme) !important;
}
</style>