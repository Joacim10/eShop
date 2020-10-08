<template>
    <div class="lightBg pl-0 pr-0 mtHome">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="col-md-5 pt-5 pb-5">
                <h1 class="pr-2 font-weight-bold f-play text-uppercase">SUBSCRIBE <span class="theme f-play text-uppercase">NOW</span></h1>
                <p class="f-16">Signup for awesome news about our new products and 
                <br> know our special discounts on products.</p>
                <div class="input-group mb-3 position-relative">
                    <input type="text" class="form-control" placeholder="Enter email address">
                </div>
                <button class="btn btnTheme white position-absolute" type="button">Subscribe</button>
            </div>
            <div class="col col-md-6">
                <img src="/Image/Subscribe/greyBg.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<style scoped>
.mtHome{
    margin-top: 5rem;
}

button {
    top: 16.7rem;
    right: 1.2rem;
}

input {
    border-radius: 3.2rem;
}::placeholder {
    color: rgb(153, 153, 153) !important;
    font-size: 14px;
    margin-left: 2rem;
}

input.form-control {
    padding-left: 1rem;
}

.btn {
    border-radius: 20px;
    padding: 3px 10px 3px 10px;
}

@media (min-width: 1025px){
    button {
    top: 10.69rem;
    right: 1.1rem;
    }
}
</style>