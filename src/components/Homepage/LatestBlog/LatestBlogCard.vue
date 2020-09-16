<template>

    
 <div class="col-12 col-md-6 pl-4 pr-4 pl-md-2 pr-md-2 pl-lg-4 pr-lg-4"> 
          <div class="row">
            <div class="col-12 col-md-12 mb-5">
              <div class="blogimg bgMediumGrey position-relative"></div>

              <div class="blog bgDarkBlue white text-left container pb-3 position-absolute">

                <div class="date themeBg text-center">
                  <h3 class="">18</h3>
                     <p class="text-uppercase mt-n2">jul</p>
                </div>

                <div class>
                  <div class="author small">
                    By
                    <a href="#">Jonathon Doe</a>
                  </div>
                  <div class="theme">We love our country, we love our peoples like ourselves</div>
                  <div class="mt-2">
                    <span class="small border p-1 mr-1">Travel</span>
                    <span class="small border ml-1 p-1">Fashon</span>
                  </div>
                  <div style>
                    <button type="button" class="blog-btn btn btnWhite mt-3">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

</template>


<script>
export default {
      name: 'LatestBlogCard',

}
</script>

<style scoped>


.blogimg {
  min-height: 304px;
}

.blog {
  top: 0;
  left: 0;
  min-height: 304px;
  border-radius: 8px;
}

.author a:link,
.author a:visited,
.author a:hover,
.author a:active {
  color: var(--white) !important;
  text-decoration: underline;
}

.date {
  left: 1rem;
  top: 0;
  /* background: var(--theme); */
  max-width: 3.5rem;
  margin: 0 1rem 1rem 0rem;
  text-align: center;
}

.blog-btn {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  /* font-weight: 500; */
  text-align: center;
  text-transform: none;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.5;
  border: 1px solid transparent;
  cursor: pointer;
  outline: 0;
  border-radius: 50px;
  padding: 0.2rem 1.1rem;
}

/* ----------------------------------------- */
/* MEDIA sm */
/* ----------------------------------------- */

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-md */
/* ----------------------------------------- */

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
    max-width: 720px;
  }

  .blogimg {
    height: 32rem;
    width: 66%;
    border-radius: 8px;
  }

  .blog {
    top: 50px;
    left: 48%;
    width: 50%;
    min-height: 304px;
    border-radius: 8px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-lg */
/* ----------------------------------------- */

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 960px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-xl */
/* ----------------------------------------- */
@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1140px;
  }
}

/* ----------------------------------------- */
/* MEDIA sm-xxl*/
/* ----------------------------------------- */

@media (min-width: 1400px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl,
  .container-xxl {
    max-width: 1320px;
  }
}

</style>