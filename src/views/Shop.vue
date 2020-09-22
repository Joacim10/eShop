<template>
  <div class="container">
        <div class="grid-container">
      <div class="menu text-left pr-3">
        <div class="f-16 text-info head">Product Categories</div>
        <div class="f-16 d-flex justify-content-between"> <div>Men's</div> <div>18</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Women's</div> <div>23</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Kids</div> <div>32</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Hats</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Sunglasses</div> <div>15</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Shoes</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div>Watches</div> <div>20</div> </div>

        <div class="f-16 text-info head">Filter By Price</div>

        <div class="f-16 text-info head">Filter By Color</div>
        <div class="f-16 d-flex justify-content-between"> <div class="color black">Black</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="color grey">Grey</div> <div>20</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="color red">Red</div> <div>18</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="color green">Green</div> <div>1</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="color orange">Orange</div> <div>4</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="color brown">Brown</div> <div>7</div> </div>

        <div class="f-16 text-info head">Filter By Size</div>
        <div class="f-16 d-flex justify-content-between"> <div class="">XS</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">S</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">M</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">L</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">XL</div> <div>12</div> </div>
        <div class="f-16 d-flex justify-content-between"> <div class="">XXL</div> <div>12</div> </div>

        <div class="f-16 text-info head">Filter By Brand</div>
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
        </div>

        <div class="f-16 text-info head">Product Status</div>
        <div class="f-16 text-info head">Top Rated Products</div>
      </div>
      <div class="products">
        <ProductList :products="products.data"/>
      </div>
      <div class="pagination d-flex justify-content-center">
        <div>Pagination</div> 
      </div>
    </div>
  </div>
</template>

<script>
// hämtar "funktioner från store"
import { mapGetters } from "vuex";
import ProductList from "@/components/Product/ProductList.vue"

export default {
  name: "Shop",
  components: {
    ProductList
  },
  computed:{
    ...mapGetters(['products'])
  }
};
</script>

<style scoped>
  .color {
    position: relative;
    margin-left: 25px;
  }
  .color::before {
    position: absolute;
    left: -25px;
    content: "";
    width: 20px;
    height: 20px;
  }
  .color.black:before{
    background-color:black;
  }
  .color.grey:before{
    background-color:grey;
  }
  .color.red:before{
    background-color:red;
  }
  .color.green:before{
    background-color:green;
  }
  .color.orange:before{
    background-color:orange;
  }
  .color.brown:before{
    background-color:brown;
  }
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