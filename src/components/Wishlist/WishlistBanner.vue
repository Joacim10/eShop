<template>
<div class="bgDarkBlue">
    <div class="text-center pt-4 pb-2">
        <nav class="container" aria-label="breadcrumb">
            <ol class="breadcrumb bgDarkBlue">
                <li class="mr-auto">
                <router-link class="theme active f-24" to="/wishlist">Wishlist</router-link>
                </li>
                <li class="ml-auto">
                <router-link class="theme active" to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item ml-1 text-white" aria-current="page">/ Wishlist</li>
            </ol>
        </nav>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
    color: var(--theme) !important;
}
</style>