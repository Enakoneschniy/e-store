<template>
  <b-container>
    <h1 class="text-center pt-5">Catalog</h1>
    <hr>
    <b-row>
      <b-col sm="3">
        <div class="filters">
          <CatalogFilter/>
        </div>
      </b-col>
      <b-col sm="9" class="product-list">
        <div class="d-flex flex-wrap">
          <b-card
            v-for="product of products"
            :key="product.id"
            :title="product.title"
            :img-src="product.image"
            :img-alt="product.title"
            img-top
            tag="article"
            class="mb-2 product"
          >
            <div class="d-flex justify-content-between align-items-center">
              <strong>{{product.price}} ₴</strong>
              <b-button variant="warning">Купить</b-button>
            </div>
          </b-card>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import CatalogFilter from "../components/CatalogFilter";

  export default {
    name: "catalog",
    components: { CatalogFilter },
    async asyncData({ $axios }) {
      let products = [];
      try {
        products = await $axios.$get('/catalog.json');
      } catch (e) {
        console.warn(e)
      }
      return {
        products
      }
    }
  }
</script>

<style scoped>
  .filters {
    border-right: 1px solid lightgray;
    padding-right: 10px;
  }

  .product {
    width: 30%;
    margin: 12px;
  }

  .product-list {
    margin: 0 auto;
  }
</style>
