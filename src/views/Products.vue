<template>
  <div class="container productsPage">
    <div class="grid-container">
      <div class="menu text-left pr-md-3">
        <div class="f-16 theme cursorNormal">Categories</div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Men' }"> <div class="cursorPointer" v-on:click="changeCategory('Men')"  >Men's</div> <div class="cursorNormal">{{ countCategory('Men').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Women' }"> <div class="cursorPointer" v-on:click="changeCategory('Women')"  >Women's</div> <div class="cursorNormal">{{ countCategory('Women').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Kids' }" > <div class="cursorPointer" v-on:click="changeCategory('Kids')" >Kids</div> <div class="cursorNormal">{{ countCategory('Kids').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Hats' }" > <div class="cursorPointer" v-on:click="changeCategory('Hats')" >Hats</div> <div class="cursorNormal">{{ countCategory('Hats').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Sunglasses' }" > <div class="cursorPointer" v-on:click="changeCategory('Sunglasses')" >Sunglasses</div> <div class="cursorNormal">{{ countCategory('Sunglasses').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Shoes' }" > <div class="cursorPointer" v-on:click="changeCategory('Shoes')" >Shoes</div> <div class="cursorNormal">{{ countCategory('Shoes').length }}</div> </div>
        <div class="f-16 d-flex justify-content-between" :class="{ theme : activeCategory === 'Watches' }" > <div class="cursorPointer" v-on:click="changeCategory('Watches')" >Watches</div> <div class="cursorNormal">{{ countCategory('Watches').length }}</div> </div>

        <div class="f-16 theme head cursorNormal">Filter By Color</div>
        <div v-if="countColor('#000000') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="black cursorPointer" type="checkbox" v-model="colors" value="#000000" /><div class="color cursorNormal">Black</div></div> <div class="cursorNormal">{{ countColor('#000000') }}</div> </div>
        <div v-if="countColor('#808080') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="grey cursorPointer" type="checkbox" v-model="colors" value="#808080" /><div class="color cursorNormal">Grey</div></div> <div class="cursorNormal">{{ countColor('#808080') }}</div> </div>
        <div v-if="countColor('#F3EB80') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="yellow cursorPointer" type="checkbox" v-model="colors" value="#F3EB80" /><div class="color cursorNormal">Yellow</div></div> <div class="cursorNormal">{{ countColor('#F3EB80') }}</div> </div>
        <div v-if="countColor('#D19539') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="brown cursorPointer" type="checkbox" v-model="colors" value="#D19539" /><div class="color cursorNormal">Brown</div></div> <div class="cursorNormal">{{ countColor('#D19539') }}</div> </div>
        <div v-if="countColor('#ffcc00') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="orange cursorPointer" type="checkbox" v-model="colors" value="#ffcc00" /><div class="color cursorNormal">Orange</div></div> <div class="cursorNormal">{{ countColor('#ffcc00') }}</div> </div>
        <div v-if="countColor('#F00B07') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="red cursorPointer" type="checkbox" v-model="colors" value="#F00B07" /><div class="color cursorNormal">Red</div></div> <div class="cursorNormal">{{ countColor('#F00B07') }}</div> </div>
        <div v-if="countColor('#990000') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="Maroon cursorPointer" type="checkbox" v-model="colors" value="#990000" /><div class="color cursorNormal">Maroon</div></div> <div class="cursorNormal">{{ countColor('#990000') }}</div> </div>
        <div v-if="countColor('#F385E9') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="pink cursorPointer" type="checkbox" v-model="colors" value="#F385E9" /><div class="color cursorNormal">Pink</div></div> <div class="cursorNormal">{{ countColor('#F385E9') }}</div> </div>
        <div v-if="countColor('#7393F9') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="lightBlue cursorPointer" type="checkbox" v-model="colors" value="#7393F9" /><div class="color cursorNormal"><span class="d-none d-md-inline-block">Light</span><span class="d-inline-block d-md-none">L.</span> Blue</div></div> <div class="cursorNormal">{{ countColor('#7393F9') }}</div> </div>
        <div v-if="countColor('#2D87D1') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="blue cursorPointer" type="checkbox" v-model="colors" value="#2D87D1" /><div class="color cursorNormal">Blue</div></div> <div class="cursorNormal">{{ countColor('#2D87D1') }}</div> </div>
        <div v-if="countColor('#286EB9') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="darkBlueColor cursorPointer" type="checkbox" v-model="colors" value="#286EB9" /><div class="color cursorNormal"><span class="d-none d-md-inline-block">Dark</span><span class="d-inline-block d-md-none">D.</span> Blue</div></div> <div class="cursorNormal">{{ countColor('#286EB9') }}</div> </div>
        <div v-if="countColor('#ffffff') != 0" class="f-16 d-flex justify-content-between align-items-center"><div class="d-flex align-items-center"><input class="whiteBox cursorPointer" type="checkbox" v-model="colors" value="#ffffff" /><div class="color cursorNormal">White</div></div> <div class="cursorNormal">{{ countColor('#ffffff') }}</div> </div>
        <div class="d-flex justify-content-start mt-4">
          <button @click="clearFilter" class="btn btnTheme white">Clear <span class="d-none d-sm-inline-block">Filter</span></button>
        </div>
      </div>
      <div class="products">
        <ProductList v-if="productsOnPage.length > 0" :products="productsOnPage"/>
        <div v-else>
          <div class="f-36 text-center f-play text-uppercase theme font-weight-bold mt-5">
            NO MATCHING ITEMS
          </div>
          <div class="mb-4">
            Your search "{{getSearchValue}}" did not match any items <span v-if="getCategoryValue != ''">in the category "{{getCategoryValue}}"</span>
          </div>
          <button @click="clearFilter" class="btn btnTheme white d-block m-auto">Clear Filter</button>
        </div>
        <div v-if="getSearchValue != '' && productsOnPage.length > 0">Your search "{{getSearchValue}}" found {{productsOnPage.length}} items <span v-if="getCategoryValue != ''">in the category "{{getCategoryValue}}"</span></div>
      </div>
      <div v-if="numberOfPages !== 1" class="pagination d-flex justify-content-center">
        <div v-for="(x, index) in numberOfPages" :key="index">
          <p class="d-inline-block font-weight-bold px-2 cursorPointer" :class="{ 'theme' : page === x }" v-on:click="changePage(x)">{{x}}</p> 
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductList from "@/components/Product/ProductList.vue"

export default {
  name: "Products",
  props: ['category', 'filter'],
  components: {
    ProductList
  },
  data() {
    return {
      activeCategory: '',
      colors: [],
      activeFilter: '',
      page: 1,
    }
  },
  methods: {
    ...mapActions(['resetSearch']),
    changePage: function (page) {
      this.page = page
    },
    changeCategory: function (category) {
      if (this.activeCategory != category) {
        this.colors = []
        this.page = 1
        this.$router.push({path: '/products', query: { category: category } })
      } else {
        this.colors = []
        this.page = 1
        this.$router.push({path: '/products'})
      }
      if (this.getSearchValue !== ''){
        this.resetSearch('')
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
      if (this.activeCategory != '' && this.products.data !== undefined) {
        array = this.countCategory(this.activeCategory).filter((item) => {
            item.colors === undefined ? console.log('item.colors 0', item.colors) : ''
          return (item.colors.includes(color)) 
        })
      // Om man har sökt
      } else if (this.getSearchValue !== '' && this.products.data !== undefined) {
        let arraySearch = this.products.data.filter((item) => {
            return (item.name.toUpperCase().includes(this.getSearchValue.toUpperCase()) || 
            item.description.toUpperCase().includes(this.getSearchValue.toUpperCase()) ||
            item.category.toUpperCase().includes(this.getSearchValue.toUpperCase())) 
        })
          if (this.getCategoryValue !== '') {
            let categoryProducts = arraySearch.filter((item) => {
              return (item.category.toUpperCase().includes(this.getCategoryValue.toUpperCase())) 
            })
            arraySearch = categoryProducts
          }
        array = arraySearch.filter((item) => {
          item.colors === undefined ? console.log('item.colors 1', item.colors) : ''
          return (item.colors.includes(color)) 
        })
      // Om man har har valt filter 
      } else if (this.activeFilter !== '') {
        let filterArray = this.products.data.filter((item) => {
          return (item.badgetype === this.activeFilter) 
        })
        array = filterArray.filter((item) => {
            item.colors === undefined ? console.log('item.colors 2', item.colors) : ''
          return (item.colors.includes(color)) 
        })
      // Om man inte sökt eller valt kategori
      } else if (this.products.data[0].colors !== undefined) {
        array = this.products.data.filter((item) => {
            item.colors === undefined ? console.log('item.colors 3', item.colors) : ''
          return (item.colors.includes(color)) 
        })
      }
      return array.length
    },
    clearFilter: function () {
      this.colors = []
      if (this.activeCategory !== '' || this.activeFilter !== '') {
        this.$router.push({path: '/products'})
        this.activeCategory = ''
        this.page = 1
      }
      if (this.getSearchValue !== ''){
        this.resetSearch('')
      }
    }
  },
  computed:{
    ...mapGetters(['products', 'getSearchValue', 'getCategoryValue']),
    productsOnPage: function () {
      let startAtProduct = ((this.page - 1) * 9)
      let endAtProduct = startAtProduct + 9
      let products = []

        products = this.computedProducts.slice(startAtProduct, endAtProduct).map(i => {
          return i
        })
      return products
    },
    numberOfPages: function () {
      return Math.ceil(this.computedProducts.length / 9)
    },
    computedProducts: function () {
      let newArrayOfProducts = this.products.data

      // Filtrerar på sök
      if (this.getSearchValue !== '' && newArrayOfProducts) {
        let searchProducts = newArrayOfProducts.filter((item) => {
            return (item.name.toUpperCase().includes(this.getSearchValue.toUpperCase()) || 
            item.description.toUpperCase().includes(this.getSearchValue.toUpperCase()) ||
            item.category.toUpperCase().includes(this.getSearchValue.toUpperCase())) 
          })
          if (this.getCategoryValue !== '') {
              let categoryProducts = searchProducts.filter((item) => {
                return (item.category.toUpperCase().includes(this.getCategoryValue.toUpperCase())) 
              })
              searchProducts = categoryProducts
          }
          newArrayOfProducts = searchProducts
      }
      

      // Filtrerar på category
      if (this.activeCategory !== '') {
        newArrayOfProducts = this.products.data.filter((item) => {
          return (item.category === this.activeCategory) 
        }) 
      }

      // Filtrerar på filter
      if (this.activeFilter !== '') {
        newArrayOfProducts = newArrayOfProducts.filter((item) => {
          return (item.badgetype === this.activeFilter) 
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
  },
  mounted() {
    this.activeCategory = this.$route.query.category || ''
    this.activeFilter = this.$route.query.filter || ''
  },
  updated() {
    this.activeCategory = this.$route.query.category || ''
    this.activeFilter = this.$route.query.filter || ''
  },
  watch: {
    category: function(newVal) {
      this.activeCategory = newVal || ''
      if (newVal) {
        this.resetSearch('')
      }
    },
    filter: function(newVal) {
      this.activeFilter = newVal || ''
      this.page = 1
      if (newVal) {
        this.resetSearch('')
      }   
    }
  }
};
</script>

<style scoped>
.productsPage {
  min-height: 1100px 
}
.color {
  position: relative;
}

input[type='checkbox']{
  width: 20px !important;
  height: 20px !important;
  margin-right: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance:none;
  box-shadow: none;
  outline: none;
  font-size: 2em;
}

.black { background-color: #000000 !important;}
.grey { background-color: #808080 !important;}
.yellow { background-color: #F3EB80 !important;}
.orange { background-color: #ffcc00 !important;}
.brown { background-color: #D19539 !important;}
.red { background-color: #F00B07 !important;}
.Maroon { background-color: #990000 !important;}
.pink { background-color: #F385E9 !important;}
.lightBlue { background-color: #7393F9 !important;}
.blue { background-color: #2D87D1 !important;}
.darkBlueColor { background-color: #286EB9 !important;}
.whiteBox { background-color: #ffffff !important; border: 1px solid #808080;}

input[type='checkbox']:checked:after {content: '\2713';color: #f9f9f9;position: absolute;line-height: 1.2rem;font-size:1rem;padding-left: 0.27rem;}
input.whiteBox[type='checkbox']:checked:after {content: '\2713';color: #808080 !important;position: absolute;line-height: 1.2rem;font-size:1rem;padding-left: 0.25rem;}
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
  .products { grid-area: products; min-height: 1000px;}
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
  }

@media screen and (min-width: 576px) {
    .color {
      margin-left: 10px;
    }
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

@media screen and (min-width: 992px) {
  .products { margin-right: -8px;}
}

</style>