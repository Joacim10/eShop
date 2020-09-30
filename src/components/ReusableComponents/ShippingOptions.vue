<template>
  <div class="d-flex justify-content-between border-bottom mt-3">
          <p class="font-weight-bold align-self-center">Shipping</p>
          <div>
            <div class="d-flex justify-content-end">

              <span class="mr-2">Flat rate:</span>
              <span class="theme mr-2">$20.00</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input"  value="Flate rate"
                 v-model="shippingType"
                 />
              
              </span>
              <br />
            </div>

         

            <div class="d-flex justify-content-end mt-1">
              <span class="mr-2">Free shipping</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input" value="Free shipping"
                 v-model="shippingType"/>

              </span>
              <br />
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span class="mr-2">Local pickup:</span>
              <span class="theme mr-2">$20.00</span>
              <span>
                <input name="kalle" type="radio" aria-label="Radio button for following text input" value="Local Pickup"
                v-model="shippingType"/>
              
              </span>
              <br />
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span>Shipping to AL</span>
            </div>
            <div class="d-flex justify-content-end mt-1">
              <span class>Change adress</span>
            </div>
          </div>
        </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
data() {
    return {
      shippingType:'',
    
    };
  },
  methods: {
       ...mapActions(['updateshippingOption']),
  },
 
  created (){
        //this.updateshippingOption(this.shippingType);
        this.shippingType = this.getShippingData;
       console.log(this.shippingType)
  },
  updated (){
      this.updateshippingOption(this.shippingType)
       console.log(this.shippingType)
  },
  computed: {
      ...mapGetters(['getShippingData','setShoppingOption'])
  }


}
</script>

<style>

</style>