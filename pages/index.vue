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
        <h1 class="mb-3">Рекомендуемые товары</h1>
        <ProductsSlider :products="products"/>
      </section>
      <section class="mb-5">
        <h1 class="mb-3">Новинки</h1>
        <ProductsSlider :products="products"/>
      </section>
    </b-container>


  </div>

</template>

<script>

  import HomeCarousel from "../components/HomeCarousel";
  import ProductsSlider from "../components/ProductsSlider";
  import TestSlotComponent from "../components/TestSlotComponent";

  export default {
    name: 'HomePage',
    components: { TestSlotComponent, ProductsSlider, HomeCarousel },
    data() {
      return {
        products: [
          {
            id: 1,
            title: 'Some product 1',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=41'
          },
          {
            id: 2,
            title: 'Some product 2',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=42'
          },
          {
            id: 3,
            title: 'Some product 3',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=43'
          },
          {
            id: 4,
            title: 'Some product 4',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=44'
          },
          {
            id: 5,
            title: 'Some product 5',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=45'
          },
          {
            id: 6,
            title: 'Some product 6',
            price: 400,
            image: 'https://picsum.photos/200/200/?image=46'
          }
        ]
      }
    }
  }
</script>

