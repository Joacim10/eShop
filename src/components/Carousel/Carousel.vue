<template>
  <!-- "REF" GÖR DET MÖJLIGT ATT KOMMA ÅT WIDTH I PIXLAR FÖR ATT RÄKNA UT HÖJDEN PÅ KORTEN  -->
  <div id="carousel" ref="carousel" class="position-relative">
    <div class="card-carousel-wrapper">
      <!-- FLYTTAR CAROUSELEN OM MAN INTE ÄR BÖRJAN AV DEN -->
      <div class="card-carousel--nav__left d-none d-sm-block" @click="moveCarousel(-1, 0)" :disabled="atHeadOfList">
          <div class="position-relative">
            <img src="/Image/Carousel/Previous btn.png" alt="">
          </div>
      </div>
      <div class="card-carousel">
          <!-- OVERFLOW-CONTAINER DÖLJER DET SOM ÄR UTANFÖR DEN -->
          <div class="card-carousel--overflow-container">
            <!-- TRANSFORM FLYTTAR KORTEN SÅ MYCKET MAN HAR SCROLLAT -->
            <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + '%' + ')' }">
                <!-- COMPUTED CARD SIZE LÄGGER TILL STYLE PÅ KORTEN FÖR STORLEK OCH MARGIN -->
                <ProductCard class="card-carousel--card" :style="computedCardSize" v-for="(product, index) in computedProducts" :key="index" :product="product" />
            </div>
          </div>
      </div>
      <!-- FLYTTAR CAROUSELEN OM MAN INTE ÄR SLUTET AV DEN -->
      <div class="card-carousel--nav__right d-none d-sm-block" @click="moveCarousel(1, 0)" :disabled="atEndOfList">
        <div class="position-relative">
            <img src="/Image/Carousel/Next btn.png" alt="">
        </div>
      </div>
    </div>
    <!-- INDICATORS -->
    <ol id="carousel-indicators" class="carousel-indicators">
      <!-- CLICK FLYTTAR CAROUSELEN BEROENDE AV INDEX. ACTIVE LÄGGS TILL OM SCROLLEN MOTSVARAR INDEX PÅ INDICATOR -->
      <li v-for="(item, index) in (computedProducts.slice(0, reduceIndicators))" :key="index"  @click="moveCarousel(0, index)" class="indicator" :class="{ 'active' : index === activeIndicator}"></li>
    </ol>
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
  props: ['windowSize', 'badgetype'], //WINDOWSIZE ÄR ANTALET KORT SOM SKA VISAS
  data() {
      return {
      currentOffset: 0, //HUR MÅNGA PROCENT MAN HAR SCROLLAT I LISTAN
      paginationFactor: Number, //HUR MÅNGA PROCENT DET SKA SCROLLAS VARJE GÅNG
      cardWidth: Number, //WIDTH I PROCENT
      cardMargin: Number, //MARGIN I PROCENT
      cardHeight: Number, //HEIGHT I PIXLAR
      reduceIndicators: Number, //HUR MÅNGA FÄRRE INDICATORS ÄN PRODUKTER SOM SKA VISAS
      activeIndicator: 0, //VILKEN INDICATOR SOM ÄR ACTIVE 
      }
  },
  methods: {
    // FLYTTAR CAROUSELEN OM MAN INTE ÄR I BÖRJAN ELLER SLUTET AV LISTAN
    moveCarousel(direction, position) {
      if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
      } else if (direction === 0) {
          this.currentOffset = -(position * this.paginationFactor);
      }
      this.activeIndicator = Math.round(-this.currentOffset / this.paginationFactor)
    },
    //ÄNDRAR HÖJDEN PÅ KORTEN NÄR MAN ÄNDRAR STORLEK PÅ WEBLÄSARENS FÖNSTER
    changeHeightOnWindowResize() {
        // "REF" GÖR DET MÖJLIGT ATT KOMMA ÅT WIDTH I PIXLAR FÖR ATT RÄKNA UT HÖJDEN PÅ KORTEN
        this.cardHeight = this.$refs.carousel.clientWidth * this.cardWidth * 0.01 * 1.143
    }
  },
  mounted: function() {
    this.cardMargin = 6/this.windowSize
    this.cardWidth = (100 - (this.cardMargin * (this.windowSize - 1))) / this.windowSize
    this.paginationFactor = +((this.cardWidth + this.cardMargin).toFixed(2))
    this.reduceIndicators = - (this.windowSize -1)
    this.$nextTick(() => {
      //SÄTTER CARD HEIGHT NÄR KOMPONENTEN SKAPAS
      this.cardHeight = this.$refs.carousel.clientWidth * this.cardWidth * 0.01 * 1.143
      //KÖR FUNKTION NÄR MAN ÄNDRAR STORLEK PÅ WEBBLÄSARENS FÖNSTER
      window.addEventListener("resize", this.changeHeightOnWindowResize)
    })
  },
  //TAR BORT EVENT-LISTENER NÄR KOMPONENTEN FÖRSTÖRS
  destroyed() {
    window.removeEventListener("resize", this.changeHeightOnWindowResize);
  },
  computed: {
    ...mapGetters(['products']),
    //FILTRERAR PRODUKTER UTEFTER BADGETYPE SOM SKICKAS IN I PROPS
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
    //RETURNERAR WIDTH, HEIGHT OCH MARGIN PÅ KORTENS STYLE I TEMPLATE
    computedCardSize() {
      return {
        "min-width": `${this.cardWidth}%`,
        "height": `${this.cardHeight}px !important`,
        "margin-right": `${this.cardMargin}%`
      };      
    },
    // RETURNERAR TRUE OM MAN ÄR I SLUTET AV LISTAN
    atEndOfList() {
      return this.activeIndicator === (this.computedProducts.length + this.reduceIndicators -1)
    },
    // RETURNERAR TRUE OM MAN ÄR I BÖRJAN AV LISTAN
    atHeadOfList() {
      return this.activeIndicator === 0;
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
/* /deep/ GÖR ATT CHILD KOMPONENTER PÅVERKAS AV CSS-KLASSEN TROTS SCOPED */
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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.card-carousel--nav__left > div > img {
  position: absolute;
  top: -35%;
  right: -15%;
  height: 40%;
  width: auto;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

@media only screen and (min-width: 1200px) {  
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