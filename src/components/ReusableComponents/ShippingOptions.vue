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
            <!-- <div class="d-flex justify-content-end mt-1">
              <span>Shipping to AL</span>
            </div> -->
            <!-- <div class="d-flex justify-content-end mt-1">
              <span class>Change adress</span>
            </div> -->
            <!-- jm test -->
            <!-- {{ shippingCost }} -->
          </div>
        </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
data() {
    return {
      shippingType:'',
      shippingCost:0,
    
    };
  },
  methods: {
       ...mapActions(['updateshippingOption','updateShippingCost']),

      calcshippingCost: function (shippingType) {
      // console.log(code);
      switch (shippingType) {
        case "Flate rate":
          return 20;
        case "Free shipping":
          return 0;
        case "Local Pickup":
          return 20;
        default:
          return 0;
      }
    },

  },
 
  created (){
        //this.updateshippingOption(this.shippingType);
        this.shippingType = this.getShippingData;
      //  console.log(this.shippingType)
  },
  updated (){
      this.updateshippingOption(this.shippingType)
      //  console.log(this.shippingType)
      //  jm 20-10-04
      this.shippingCost = this.calcshippingCost(this.shippingType);
      this.updateShippingCost(this.shippingCost)

  },
  computed: {
      ...mapGetters(['getShippingData','setShoppingOption'])
  }


}
</script>

<style scoped>

input:checked{
  border:1px solid var(--theme);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-top: 4px;
  outline: none!important;
   top: -5.6px;
   left: 1.4px;
}
input {
 border:1px solid gray;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-top: 4px;
  outline: none!important;
}


input[type='radio']:after {
        border-radius: 20px;
        height: 8px!important;
        width: 8px !important;
        position: relative;
        content: '';
        display: inline-block;
    }
    

    input[type='radio']:checked:after {
    
        top: -0.45rem;
        left: 2px;
        position: relative;
        background-color: var(--theme);
        content: '';
        display: inline-block;
        visibility: visible;
   
    }

    input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
 
}
</style>