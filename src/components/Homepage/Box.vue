<template>
    <div class="marginBox">
        <div class="row mtHome">
            <div class="col col-sm-6 col-md-6 col-xl mb-3">
                <div class="d-flex flex-row boxHome pt-3 my-hover">
                    <div class="pl-4 pr-3 pt-3">
                        <img src="/Image/Box/box1.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="font-weight-bold darkBlue">
                            <h6 class="theme">Free Shipping</h6>
                            <p class="font-weight-normal mt-2">For a local customer, we provide free shipping facility</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col col-sm-6 col-md-6 col-xl mb-3">
                <div class="d-flex flex-row boxHome pt-3 my-hover">
                    <div class="pl-4 pr-3 pt-3">
                        <img class="" src="/Image/Box/box2.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="font-weight-bold darkBlue">
                            <h6 class="theme">24/7 support</h6>
                            <p class="font-weight-normal mt-2">For any inquiry, we are available 24 hours every day</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col col-sm-6 col-md-6 col-xl mb-3">
                <div class="d-flex flex-row boxHome pt-3 my-hover">
                    <div class="pl-4 pr-3 pt-3">
                        <img src="/Image/Box/box3.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="font-weight-bold darkBlue">
                            <h6 class="theme">Online payment</h6>
                            <p class="font-weight-normal mt-2">You can pay quickly and easily with our online payment system </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col col-sm-6 col-md-6 col-xl mb-3">
                <div class="d-flex flex-row boxHome pt-3 my-hover">
                    <div class="pl-4 pr-3 pt-3">
                        <img src="/Image/Box/box4.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="font-weight-bold darkBlue">
                            <h6 class="theme">Fast delivery</h6>
                            <p class="font-weight-normal mt-2">We understand your urgency and we deliver in a fast way</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.marginBox{
    margin: 0rem 1rem 0rem 1rem;
}

.mtHome{
    margin-top: 5rem;
}

.boxHome{
    background-color: #20d3c148;
    border-radius: 12px;
}

.boxHome:hover{
    background-color: var(--theme);
    color: var(--white);
}

.my-hover{
    color: white;
}

.my-hover:hover { background-color: #20D3C2; }
.my-hover:hover h6, .my-hover:hover p { color: white; }
.my-hover:hover img { filter: brightness(0) invert(1)}

/* Laptop */
@media (min-width: 1025px){
    .marginBox{
        margin: 0rem 10rem 0rem 10rem;
    }
}
</style>