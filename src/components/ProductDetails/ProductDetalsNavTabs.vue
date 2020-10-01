<template>
  <div class="col-12 " v-if="product" >
    <!-- Tab Nav -->
    <nav class="">
      <div class="flex-column flex-sm-row nav nav-tabs" id="nav-tab" role="tablist">

        <a class="text-center flex-fill flex-lg-grow-0 nav-link active mr-1 mt-1"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-desc"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true">Description</a>

        <a class="text-center flex-fill flex-lg-grow-0 nav-link mr-1 mt-1"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-add"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false" >Additional Information</a>

        <a class="text-center flex-fill flex-lg-grow-0 nav-link mr-1 mt-1" 
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-review"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false">Reviews</a>

        <a class="text-center flex-fill flex-lg-grow-0 nav-link mr-1 mt-1"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-brand"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false">About Brand</a>

      </div>
    </nav>

    <!-- Tab content -->
    <div class="tab-content pt-4" id="nav-tabContent">
      <!-- Tab 1 Description -->
      <div 
        class="tab-pane fade show active"
        id="nav-desc"
        role="tabpanel"
        aria-labelledby="nav-home-tab">

       {{ product.description }}
       
      </div>

      <!-- Tab 2 -->
      <div
        class="tab-pane fade"
        id="nav-add"
        role="tabpanel"
        aria-labelledby="nav-profile-tab">

          {{ product.otherinfo }}

      </div>

      <!-- Tab 3 -->
      <div
        class="tab-pane fade"
        id="nav-review"
        role="tabpanel"
        aria-labelledby="nav-profile-tab">

      <!-- inside tab 3  start -->
        <div class="row">

        <!-- inside tab 3  left -->
          <div class="col-12 col-md-6 ">

            
            <div class=""><span class="theme">1 review for</span>  {{ product.name }}</div>

            <div class="row pt-3">
              <div class="col-2"><div class="profileImg rounded"></div></div>
              <div class="col-10">

                <div class="d-flex justify-content-between">
                  <span class="d-flex">
                    <span class="d-flex mr-2 font-weight-bold theme">John Doe </span>
                  <span class="d-flex mr-2 grey f-14">- {{ dateStamp }}</span>
                  </span>                

                  <span class="d-flex mr-2">
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="fas fa-star theme"></i>
                        <i class="far fa-star theme"></i>
                  </span>
                </div>

                <div class="pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</div>

              </div>
            </div>

          </div>

          <!-- inside tab 3  right -->
          <div class="col-12 col-md-6 pb-3 pt-3 bgForm rounded">
              
            <h5>Add a review</h5>
            <p class="pt-1">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <div class="pt-1">
              <span>
                Your rating: <span class="theme">* </span>
                <span class="ml-3">

                        <i class="far fa-star grey"></i>
                        <i class="far fa-star grey"></i>
                        <i class="far fa-star grey"></i>
                        <i class="far fa-star grey"></i>
                        <i class="far fa-star grey"></i>
                    </span>
              </span>
            </div>

            <div class="pt-1">

             <form class="" >

                <!--  textbox  -->
                <div class="form-group pt-3">
                    <label for="review" >Your review<span class="theme"> *</span></label>
                    <textarea class="form-control" id="review" rows="8" required></textarea>
                </div>

                <!--  Name -->
                <div class="mb-3">
                  <label for="name" >Email<span class="theme"> *</span></label>
                  <input type="text" class="form-control" id="name" required />
                </div>

                <!--  Email -->
                <div class="mb-3">
                  <label for="email" >Email<span class="theme"> *</span></label>
                  <input type="email" class="form-control" id="email" required />
                </div>

                <!--  Checkbox account -->
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="save" >
                    <label class="form-check-label" for="save">Save my name, email, and website in this browser for the next time I comment.
                    </label>
                    </div>
                </div>

                <button type="submit" class="btn btnTheme white col-lg-auto text-uppercase text-bold pl-3 pr-3 pt-2 pb-2">Submit</button>

              </form>
            </div>
          </div>
        </div>

<!-- inside tab 3  end -->

      </div>

      <!-- Tab 4 -->

      <div
        class="tab-pane fade"
        id="nav-brand"
        role="tabpanel"
        aria-labelledby="nav-profile-tab">

       <img :src="'/Image/Brand/' + product.brand + '.png' " /> 

      <p class="pt-3"> {{ product.brand }} is the best brand in the world!! </p>
       
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "ProductDetalsNavTabs",

  props: ['id'],

  components: {},
  
  data() {
    return {
       quantity: 1,
       dateStamp: Number
    };
  },

  methods: {
    ...mapActions(['getProductById']),

     getDate: function() {
          const today = new Date();
          const date = today.getFullYear()+'-'+('0' + (today.getMonth()+1)).slice(-2) +'-'+ ('0' + today.getDate()).slice(-2) ;
          
          this.dateStamp = date;
      }
  },
  created() {
    this.getProductById(this.id);

    setInterval(this.getDate);
    
  },
  computed: {
    ...mapGetters(['product'])
  }
  


 }

</script>

<style  scoped>
.nav-link {
  background-color: var(--darkBlue);
  color: var(--white);
}

.nav-tabs .nav-link.active {
  background-color: var(--theme);
  color: var(--white);
}

.nav-tabs {
  border-bottom: 2px solid var(--theme);
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.bgForm {
 background: #F6F6F6;
}

.profileImg {
  height: 5rem;
  width: 5rem;
  background-color: var(--grey);
}

</style>