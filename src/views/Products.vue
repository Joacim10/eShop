<template>
  <div class="container">
        <div class="grid-container">
      <div class="menu text-left pr-3">
        <div class="f-16 text-info head cursorNormal">Product Categories</div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Men' }"> <div class="cursorPointer" v-on:click="changeCategory('Men')"  >Men's</div> <div class="cursorNormal">{{ countCategory('Men').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Women' }"> <div class="cursorPointer" v-on:click="changeCategory('Women')"  >Women's</div> <div class="cursorNormal">{{ countCategory('Women').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Kids' }" > <div class="cursorPointer" v-on:click="changeCategory('Kids')" >Kids</div> <div class="cursorNormal">{{ countCategory('Kids').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Hats' }" > <div class="cursorPointer" v-on:click="changeCategory('Hats')" >Hats</div> <div class="cursorNormal">{{ countCategory('Hats').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Sunglasses' }" > <div class="cursorPointer" v-on:click="changeCategory('Sunglasses')" >Sunglasses</div> <div class="cursorNormal">{{ countCategory('Sunglasses').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Shoes' }" > <div class="cursorPointer" v-on:click="changeCategory('Shoes')" >Shoes</div> <div class="cursorNormal">{{ countCategory('Shoes').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : category === 'Watches' }" > <div class="cursorPointer" v-on:click="changeCategory('Watches')" >Watches</div> <div class="cursorNormal">{{ countCategory('Watches').length }}</div> </div>

<!--         <div class="f-16 text-info head">Filter By Price</div> -->

        <div class="f-16 text-info head cursorNormal">Filter By Color</div>
        <div v-if="countColor('#000000') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="black cursorPointer" type="checkbox" v-model="colors" value="#000000" /><div class="color cursorNormal">Black</div></div> <div class="cursorNormal">{{ countColor('#000000') }}</div> </div>
        <div v-if="countColor('#808080') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="grey cursorPointer" type="checkbox" v-model="colors" value="#808080" /><div class="color cursorNormal">Grey</div></div> <div class="cursorNormal">{{ countColor('#808080') }}</div> </div>
        <div v-if="countColor('#F3EB80') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="yellow cursorPointer" type="checkbox" v-model="colors" value="#F3EB80" /><div class="color cursorNormal">Yellow</div></div> <div class="cursorNormal">{{ countColor('#F3EB80') }}</div> </div>
        <div v-if="countColor('#D19539') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="brown cursorPointer" type="checkbox" v-model="colors" value="#D19539" /><div class="color cursorNormal">Brown</div></div> <div class="cursorNormal">{{ countColor('#D19539') }}</div> </div>
        <div v-if="countColor('#F00B07') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="red cursorPointer" type="checkbox" v-model="colors" value="#F00B07" /><div class="color cursorNormal">Red</div></div> <div class="cursorNormal">{{ countColor('#F00B07') }}</div> </div>
        <div v-if="countColor('#F385E9') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="pink cursorPointer" type="checkbox" v-model="colors" value="#F385E9" /><div class="color cursorNormal">Pink</div></div> <div class="cursorNormal">{{ countColor('#F385E9') }}</div> </div>
        <div v-if="countColor('#ffffff') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="whiteBox cursorPointer" type="checkbox" v-model="colors" value="#ffffff" /><div class="color cursorNormal">White</div></div> <div class="cursorNormal">{{ countColor('#ffffff') }}</div> </div>

<!--         <div class="f-16 text-info head">Filter By Size</div>

        <div class="f-16 d-flex justify-content-between"> <div class="">XS</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">S</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">M</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">L</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">XL</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">XXL</div> <div>12</div> </div> -->

<!--         <div class="f-16 theme head">Filter By Brand</div>
        <div class="row brands">
          <div class="col-6">
            <img src="/Image/Brand/Bexim.png" alt="">
          </div>
          <div class="col-6">
            <img src="/Image/Brand/Lighton.png" alt="">
          </div>
          <div class="col-6"> 
            <img src="/Image/Brand/Dismis.png" alt="">
          </div>
          <div class="col-6">
            <img src="/Image/Brand/Rosimo.png" alt="">
          </div>
          <div class="col-6">
            <img src="/Image/Brand/Dallas.png" alt="">        
          </div>
        </div> -->

  <!--       <div class="f-16 theme head">Product Status</div>
        <div class="f-16 theme head">Top Rated Products</div> -->
        <div class="d-flex justify-content-start mt-4">
          <button @click="clearFilter" class="theme btn btnTheme white">Clear Filter</button>
        </div>
      </div>
      <div class="products">
        <ProductList :products="computedProducts"/>
      </div>
      <div class="pagination d-flex justify-content-center">
        <div><!-- Pagination --></div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "@/components/Product/ProductList.vue"

export default {
  name: "Shop",
  components: {
    ProductList
  },
  data() {
    return {
      category: '',
      colors: []
    }
  },
  methods: {
    changeCategory: function (category) {
      if (this.category != category) {
        this.category = category
      } else {
        this.category = ''
      }
    },
    countCategory: function (category) {
      let array = this.products.data.filter((item) => {
        return (item.category === category) 
      })    
      return array
    },
    countColor: function (color) {
      let array = []

      // Om man har valt en category så räknas alla produkter med just den färgen i den kategorin
      if (this.category != '') {
        array = this.countCategory(this.category).filter((item) => {
          return (item.colors.includes(color)) 
        })
      } else {
        array = this.products.data.filter((item) => {
          return (item.colors.includes(color)) 
        })
      }
      return array.length
    },
    clearFilter: function () {
      this.category = '',
      this.colors = []
    }
  },
  computed:{
    ...mapGetters(['products']),
    computedProducts: function () {
      let newArrayOfProducts = []

      // Filtrerar på category
      if (this.category === '') {
        newArrayOfProducts = this.products.data
      } else {
        newArrayOfProducts = this.products.data.filter((item) => {
          return (item.category === this.category) 
        }) 
      }

      // Filtrerar på varje color och slår ihop det till en array
      if (this.colors.length !== 0) {
        let colorsArray = []
        for (let x of this.colors) {
          let y = newArrayOfProducts.filter((item) => {
            return (item.colors.includes(x)) 
          })
          y.forEach((item) => {
            if (colorsArray.indexOf(item) === -1) {
              colorsArray.push(item)
            }
          })
        }
        newArrayOfProducts = colorsArray
      }

      // Sorterar på namn
      newArrayOfProducts = newArrayOfProducts.sort((a, b) => {
        return a['name'].toString().localeCompare(b['name'].toString())
      })
      return newArrayOfProducts
    }
  }
};
</script>

<style scoped>
  .color {
    position: relative;
    margin-left: 10px;
  }

input[type='checkbox']{
  width: 20px !important;
  height: 20px !important;
  margin: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  box-shadow: none;
  outline: none;
  font-size: 2em;
}

.black { background-color: #000000;}
.grey { background-color: #808080;}
.yellow { background-color: #F3EB80;}
.brown { background-color: #D19539;}
.red { background-color: #F00B07;}
.pink { background-color: #F385E9;}
.whiteBox { background-color: #ffffff; border: 1px solid #808080;}

input[type='checkbox']:checked:after {content: '\2713';color: #f9f9f9;position: absolute;line-height: 1.2rem;font-size:1rem;padding-left: 0.27rem;}
input.white[type='checkbox']:checked:after {content: '\2713';color: #808080;position: absolute;line-height: 1.2rem;font-size:1rem;padding-left: 0.25rem;}
input.yellow[type='checkbox']:checked:after {content: '\2713';color: #808080;position: absolute;line-height: 1.3rem;font-size:1.1rem;padding-left: 0.25rem;}

  .text-left > div {
    margin-bottom: 10px;
  }
  .head {
    margin-top: 25px;
  }
  img {
    width: 63px;
  }
  .brands {
    width: 225px;
  }
  .menu { grid-area: menu; }
  .products { grid-area: products; }
  .pagination { grid-area: pagination; }
  .grid-container {
    width: 100%;
    display: grid;
    grid-template-areas:
      'menu products products'
      'menu products products'
      'menu products products'
      'menu products products'
      'menu pagination pagination';
    grid-gap: 10px;
    padding: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
  }

@media screen and (min-width: 576px) {
    .grid-container {
    width: 100%;
    display: grid;
    grid-template-areas:
      'menu products products products'
      'menu products products products'
      'menu products products products'
      'menu products products products'
      'menu pagination pagination pagination';
    padding: 0px;
    grid-gap: 0px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

</style>