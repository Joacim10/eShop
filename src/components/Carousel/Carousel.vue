<template>
<div id="carousel" class="position-relative">
        <ol id="carousel-indicators" class="carousel-indicators">
            <li v-for="(item, index) in (computedProducts.slice(0, numberOfIndicators))" :key="index"  @click="moveCarousel(0, index)" class="indicator" :class="{ 'active' : index === activeIndicator}"></li>
        </ol>

        <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left d-none d-sm-block" @click="moveCarousel(-1, 0)" :disabled="atHeadOfList">
            <div class="position-relative">
            <img src="/Image/Carousel/Previous btn.png" alt="">
            </div>
        </div>
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
            <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + '%' + ')' }">
                <ProductCard class="card-carousel--card" :style="computedWidthAndMargin" v-for="(product, index) in computedProducts" :key="index" :product="product" />
            </div>
            </div>
        </div>
        <div class="card-carousel--nav__right d-none d-sm-block" @click="moveCarousel(1, 0)" :disabled="atEndOfList">
            <div class="position-relative">
                <img src="/Image/Carousel/Next btn.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from '@/components/Product/ProductCard.vue'

export default {
  name: "Carousel",
  components: {
      ProductCard
  },
  props: ['windowSize', 'badgetype'],  
  data() {
      return {
      filteredProducts: {count: 0, data: ['']},
      currentOffset: 0,
      paginationFactor: Number,
      cardWidth: Number,
      cardMargin: Number,
      numberOfIndicators: Number,
      activeIndicator: 0,
      }
  },
  methods: {
    moveCarousel(direction, position) {
      if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
      } else if (direction === 0) {
          this.currentOffset = -(position * this.paginationFactor);
      }
      this.activeIndicator = -this.currentOffset / this.paginationFactor
    }
  },
  mounted: function() {
    this.cardMargin = 6/this.windowSize
    this.cardWidth = (100 - (this.cardMargin * (this.windowSize - 1))) / this.windowSize
    this.paginationFactor = +((this.cardWidth + this.cardMargin).toFixed(2))
    this.filteredProducts = this.products || {count: 0, data: ['']}
    this.numberOfIndicators = (this.computedProducts.length || 0 ) - (this.windowSize -1)
  },
  computed: {
    ...mapGetters(['products']),
    computedProducts: function () {
      let newArrayOfProducts = []

      for (let x of this.badgetype) {
        let y = this.products.data.filter((item) => {
          return (item.badgetype.includes(x)) 
        })
        newArrayOfProducts = [...newArrayOfProducts, ...y].sort((a, b) => {
          return a['name'].toString().localeCompare(b['name'].toString())
        })
      }
      return newArrayOfProducts
    },
    computedWidthAndMargin() {
      return {
        "min-width": `${this.cardWidth}%`,
        "margin-right": `${this.cardMargin}%`
      };      
    },
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * ((this.computedProducts || []).length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
}
</script>

<style scoped>
body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: 'Source Sans Pro', sans-serif;
}
.card-carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
  width: 100%;
}
/deep/ .card-carousel {
  display: flex;
  justify-content: center;
  width: 100%;
}
.card-carousel--overflow-container {
  overflow: hidden;
  width: 100%;
}
.card-carousel--nav__left {
  left: -25px;
}
.card-carousel--nav__right {
  right: -25px;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  position: absolute;
  z-index: +1;
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  cursor: pointer;
  transition: transform 150ms linear;
  background-color: #20D3C2;
  border-radius: 50%;
  border: 2px solid #20D3C2;
}
.card-carousel--nav__right > div, .card-carousel--nav__left > div {
  width: 15px;
  height: 15px;
}
.card-carousel--nav__right > div > img {
  position: absolute;
  top: -35%;
  left: -15%;
  height: 70%;
  width: auto;
}
.card-carousel--nav__left > div > img {
  position: absolute;
  top: -35%;
  right: -15%;
  height: 40%;
  width: auto;
}

.card-carousel-cards div {
  height: 400px;
}

@media (min-width: 576px) { 
    .card-carousel-cards div{
        height: 280px;
    }
}

@media (min-width: 768px) {  
    .card-carousel-cards div{
        height: 300px;
    }
}

@media (min-width: 992px) {  
    .card-carousel-cards div{
        height: 360px;
    }
}

@media only screen and (min-width: 1200px) {
  .card-carousel-cards div{
      height: 420px;
  }
  
  .card-carousel--nav__left, .card-carousel--nav__right {
    padding: 20px;
  }
  .card-carousel--nav__left > div, .card-carousel--nav__right > div {
    width: 25px;
    height: 25px;
  }
  .card-carousel--nav__left > div > img {
    position: absolute;
    top: -35%;
    left: -20%;
    height: 70%;
    width: auto;
  }
  .card-carousel--nav__right > div > img {
    position: absolute;
    top: -35%;
    left: -15%;
    height: 70%;
    width: auto;
  }
  .card-carousel--nav__left {
    left: -45px;
  }
  .card-carousel--nav__right {
    right: -45px;
  }
}
@media only screen and (min-width: 1300px) {
  .card-carousel--nav__left {
    left: -80px;
    padding: 30px;
  }
  .card-carousel--nav__right {
    right: -80px;
    padding: 30px;
  }
  .card-carousel--nav__left > div, .card-carousel--nav__right > div {
    width: 45px;
    height: 45px;
  }
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 1;
  background-color: white;
  border-color: #e9e4e4;
  
}
.card-carousel--nav__left[disabled] > div > img, .card-carousel--nav__right[disabled] > div > img {
  filter: invert(10%);
}
.card-carousel-cards {
  width: 100%;
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
/deep/ .card-carousel-cards .card-carousel--card {
  margin-right: 3%;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
/deep/ .card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
/deep/ .card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
/deep/ .card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
/deep/ .card-carousel-cards .card-carousel--card img:hover {
  opacity: 0;
  
}
/deep/ .card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
/deep/ .card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  color: #ffff;
  user-select: none;
}
/deep/ .card-carousel-cards .card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
/deep/ .card-carousel-cards .card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
/deep/ .card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}
#carousel-indicators {
  bottom: -40px;
  margin: 0;
}
#carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: grey;
}
#carousel-indicators > .active {
  background-color: #20D3C2;
}
h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}
</style>