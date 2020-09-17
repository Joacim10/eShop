<template>
    <div class="container pl-0 pr-0 mtHome">
        <h1 class="row font-weight-bold d-flex justify-content-center">SHOP BY<span class="theme ml-2">CATEGORY</span></h1>
        <div class="d-flex justify-content-center mb-3">
            <hr class="zigzag">
        </div>
        <p class="d-flex justify-content-center text-center">We always try to give you the best product within a fast and reliable way</p>
        <div class="grid-layout mlC">
            <div class="category-item span-1"><img src="https://bit.ly/2RupTt5" style="height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Men</p></div>
            <div class="category-item span-1"><img src="https://bit.ly/2GYE4o2" style="width:320px;height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Women</p></div>
            <div class="category-item span-1"><img src="https://bit.ly/3hvaYcA" style="height:420px;" class="img-size img-fluid"><p class="bgDarkblue ">Kids</p></div>
            <div class="category-item span-2"><img src="https://bit.ly/2E4c29B" class="img-size img-fluid"><p class="bgDarkblue ">Shoes</p></div>
            <div class="category-item span-2"><img src="https://bit.ly/2ZDEhDG" style="height:293px;" class="img-size img-fluid"><p class="bgDarkblue ">Hats</p></div>
            <div class="category-item span-3"><img src="https://bit.ly/3c1Ryee" class="img-size img-fluid"><p class="bgDarkblue">Sunglases</p></div>
            <div class="category-item span-1"><img src="https://bit.ly/3mv9EdE" class="img-size img-fluid"><p class="bgDarkblue ">Watches</p></div>
        </div>
    </div>
</template>

<style scoped>
.mtHome{
    margin-top: 5rem;
}

.mlC{
    margin-left: 5rem;
}

.category-item{
    position: relative;
    border-radius: 6px;
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

/* Mobile */
@media (max-width:1000px) {
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
}

/* Laptop */
@media (min-width: 1025px){
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
}
</style>