<template>

    <div class="container pl-0 pr-0 mtHome">

     <div class="text-center pt-5">
        <h1 class="font-weight-bold f-play text-uppercase">SHOP BY <h1 class="theme font-weight-bold d-inline-block f-play text-uppercase"> CATEGORY </h1></h1>

      </div>
 
        
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>

        <p class="d-flex justify-content-center text-center container">We always try to give you the best product within a fast and reliable way</p>
        
        <div class="grid-layout mlC">
        
            <div class="category-item span-1 imgNone"><router-link :to="{ path: '/products', query: { category: 'Men' }}">
                <img src="https://bit.ly/2RupTt5" style="height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Men</p></router-link></div>
            <div class="category-item span-1 imgNone"><router-link :to="{ path: '/products', query: { category: 'Women' }}">
                <img src="https://bit.ly/2GYE4o2" style="width:320px;height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Women</p></router-link></div>
            <div class="category-item span-1 imgNone"><router-link :to="{ path: '/products', query: { category: 'Kids' }}">
                <img src="https://bit.ly/3hvaYcA" style="height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Kids</p></router-link></div>
            <div class="category-item span-2"><router-link :to="{ path: '/products', query: { category: 'Shoes' }}">
                <img src="https://bit.ly/2E4c29B" class="img-size img-fluid"><p class="bgDarkblue ">Shoes</p></router-link></div>
            <div class="category-item span-2 imgNone"><router-link :to="{ path: '/products', query: { category: 'Hats' }}">
                <img src="https://bit.ly/2ZDEhDG" style="height:293px;" class="img-size img-fluid"><p class="bgDarkblue ">Hats</p></router-link></div>
            <div class="category-item span-3"><router-link :to="{ path: '/products', query: { category: 'Sunglases' }}">
                <img src="https://bit.ly/3c1Ryee" class="img-size img-fluid"><p class="bgDarkblue">Sunglases</p></router-link></div>
            <div class="category-item span-1"><router-link :to="{ path: '/products', query: { category: 'Watches' }}">
                <img src="https://bit.ly/3mv9EdE" class="img-size img-fluid"><p class="bgDarkblue ">Watches</p></router-link></div>
        </div>

    </div>
</template>

<style scoped>
.mtHome{
    margin-top: 5rem;
}

.img-size{
    border-radius: 6px;
}

.bgDarkblue{
    font-weight: 500;
    padding: 8px 15px 6px 15px;
    font-size: 16px;
    position: absolute;
    color: var(--theme);
    bottom: -1rem;
    border-radius: 0 6px 0 6px;
    background-color: var(--darkBlue);
}

.category-item{
    position: relative;
    border-radius: 6px;
    width: 100%;
}

/* Mobile */
@media (min-width: 100px) and (max-width: 400px) {
.span-1{
    grid-column-end: span 2;
    grid-row-end: span 1;
}

.span-2{
    grid-column-end: span 2;
    grid-row-end: span 1;
}

.span-2-m{
    grid-column-end: span 2;
    grid-row-end: span 1;
}

.mlC{
    margin-left: 2.5rem;
}

.category-item{
    position: relative;
    border-radius: 6px;
    margin-bottom: 1rem;
    width: 300px;
}
}

/* Ipad */
@media (min-width: 760px) and (max-width: 991.98px) {
    .imgNone{
        display: none;
    }
}

/* Laptop */
@media (min-width: 992px){
.grid-layout{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(180px, auto);
    grid-auto-flow: dense;
    padding: 10px;
    }

.span-1{
    grid-column-end: span 2;
    grid-row-end: span 1;
    }

.span-2{
    grid-column-end: span 3;
    grid-row-end: span 1;
    }

.span-3{
    grid-column-end: span 4;
    grid-row-end: span 1;
    }

.bgDarkblue{
    font-weight: 500;
    padding: 8px 15px 6px 15px;
    font-size: 16px;
    position: absolute;
    width: 50%;
    color: var(--theme);
    bottom: -1rem;
    border-radius: 0 6px 0 6px;
    background-color: var(--darkBlue);
}

.mlC{
    margin-left: 5rem;
}

.category-item{
    position: relative;
    border-radius: 6px;
    width: 100%;
}
}
</style>