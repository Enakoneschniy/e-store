<template>
  <div>
    <HomeCarousel/>
    <!--<TestSlotComponent>
      <template slot="footer">
        This is footer!!!
      </template>
      <template slot="header">
        This is header!!!
      </template>
      <span style="color: red;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aspernatur debitis distinctio dolorem doloribus, in iste itaque minima nesciunt odio sequi tempore tenetur voluptatem voluptatibus. Magni minima quidem sapiente.</span>
    </TestSlotComponent>-->
    <b-container>
      <section class="mb-5">
        <h1 class="mb-3">Рекомендуемые товары ({{recommendedProducts.length}})</h1>
        <ProductsSlider v-if="recommendedProducts.length > 0" :products="recommendedProducts"/>
      </section>
      <section class="mb-5">
        <h1 class="mb-3">Новинки({{newProducts.length}})</h1>
        <ProductsSlider v-if="newProducts.length > 0" :products="newProducts"/>
      </section>
    </b-container>


  </div>

</template>

<script>

  import HomeCarousel from "../components/HomeCarousel";
  import ProductsSlider from "../components/ProductsSlider";
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'HomePage',
    components: { ProductsSlider, HomeCarousel },
    created() {
      this.loadProducts();
    },
    computed: mapGetters({
      recommendedProducts: 'Catalog/getRecommendedProducts',
      newProducts: 'Catalog/getNewProducts'
    }),
    methods: mapActions({
      loadProducts: 'Catalog/loadProducts'
    }),
  }
</script>

