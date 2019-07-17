<template>
  <no-ssr>
    <carousel :margin="10" :items="5" :nav="false" :dots="false" class="relative">
      <div v-for="product of products" :key="product.id">
        <div>
          <b-img class="mb-2" :src="product.image" fluid :alt="product.title"/>
          <h4 class="mb-3">{{product.title}}</h4>
          <div class="d-flex justify-content-between align-items-center">
            <strong>{{product.price}} ₴</strong>
            <b-button variant="warning">Купить</b-button>
          </div>
        </div>
      </div>
      <template slot="prev"><span class="prev"></span></template>
      <template slot="next"><span class="next"></span></template>
    </carousel>
  </no-ssr>
</template>

<script>

  export default {
    name: "ProductsSlider",
    props: {
      products: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .relative {
    position: relative;
  }

  .next, .prev {
    position: absolute;
    top: calc(50% - 15px);
    cursor: pointer;
  }

  .prev {
    left: -50px;
  }

  .next {
    right: -50px;
  }

  .next::before, .prev::before {
    font-size: 26px;
  }

  .prev::before {
    content: '◄';
  }

  .next::before {
    content: '►';
  }
</style>
