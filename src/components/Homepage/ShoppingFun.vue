<template>
    <div class="carousel slide pl-0 pr-0" data-ride="carousel">
        <div class="productBg carousel-inner mb-first"> 
            <div class="mtHome carousel-item active">
                <div class="container">
                    <h1>{{ $t("header.shoping") }}</h1>
                    <h1 class="font-weight-bold theme">{{ $t("header.fun") }}</h1>
                    <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci <br> vel diam ultricies faucibus. Quisque quis erat sed</p>
                    <router-link to="/products"><button class="btn btnWhite pl-4 pr-4 p-2">{{ $t("header.button") }}</button></router-link>
                </div>
             
                <img src="/Image/ShoppingFun/header-img.png" class="d-block imgCarousel img-none">
                <!-- <img src="/Image/ShoppingFun/model_3.png " class="d-block imgCarousel img-none"> -->
     
            </div>
        </div>

    </div>



</template>

<style scoped>

.mtHome{
    margin-top: 5rem;
    height: 400px;
}

.imgCarousel{
    margin-left: 40vw;
    margin-top: -30vh;
}

@media (max-width:1000px) {
    .img-none {
        display: none !important;
    }
}

@media (max-width: 1025px) {
    .mb-first{
        padding-bottom: 3rem;
    }
}
</style>