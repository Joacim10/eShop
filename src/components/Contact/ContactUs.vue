<template>
<div>
    <iframe class="widthContactUs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.1808947662178!2d16.562603396133838!3d59.61335019410576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e614f23d1bf39%3A0x28b848b74b8e0430!2sEC%20Utbildning!5e0!3m2!1ssv!2sse!4v1601883870348!5m2!1ssv!2sse" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <div class="container blueBox">
        <div class="row borderBottom container none">
            <div class="ml-4 mt-3 row">
                <i class="theme mt-1 fas fa-map-marker-alt"></i>
                <p class="white ml-2">EC Utbildning <br> Västerås</p>
            </div>
            <div class="mlContact mt-3 row">
                <i class="theme mt-1 fas fa-phone-square-alt"></i>
                <p class="white ml-2">+880-123456789 <br> +880-123456789</p>
            </div>
            <div class="mlContact mt-3 row">
                <i class="theme mt-1 far fa-envelope-open"></i>
                <p class="white ml-2">vanilla@website.com <br> info@website.com</p>
            </div>
        </div>

        <div class="mt-4 container d-flex flex-row">
            <div class="col-12 col-sm-12 col-lg-6 row none">
                <p class="theme f-24">Get in Touch</p>
                <p class="white mP maxWidth">We have world-class, flexible support via live chat, email and phone. We guarantee that you’ll be able to have any issue resolved within 24 hours. You can contact support immediately here.</p>
                <div class="mP">
                    <p class="white">Follow us</p>
                    <div class="theme f-18">
                        <a class="text-white mr-3"> <i class="fab fa-facebook-f"></i></a>
                        <a class="text-white mr-3"> <i class="fab fa-twitter"></i></a>
                        <a class="text-white mr-3"> <i class="fab fa-instagram"></i></a>
                        <a class="text-white mr-3"> <i class="fab fa-pinterest-p"></i></a>
                        <a class="text-white mr-2"> <i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-6 mt">
                <form>
                    <div class="form-group">
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Product category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="name" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Subject" rows="1" style="resize: none;"></textarea>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Message" rows="6" style="resize: none;"></textarea>
                    </div>
                    <button type="submit" class="btn btnTheme mb-5 white">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.widthContactUs{
    width: 100%;
    height: 30rem;
}

.blueBox{
    background-color: var(--darkBlue);
    border-radius: 5px;
}

.mP{
    margin-top: -8rem;
}

.maxWidth{
    max-width: 80%;
}

.borderBottom {
    border-bottom: 3px solid var(--theme);
    width: 110%;
}

@media (max-width: 800px) {  
    .none{
        display: none;
    }

    .mt{
        margin-top: 2rem;
    }
}
@media (min-width: 1000px) {  
    .mlContact{
        margin-left: 26%;
    }
}
</style>