<template>
  <b-container>
    <h1 class="text-center pt-5">Catalog</h1>
    <hr>
<!--    <b-input v-model="user.firstName"></b-input>
    <b-input v-model="user.lastName"></b-input>-->
    <b-row>
      <b-col sm="3">
        <CatalogFilter/>
      </b-col>
      <b-col sm="9" class="product-list">
        <div class="d-flex flex-wrap">
          <b-card
            v-for="product of catalog.products"
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
        <div class="overflow-auto">
          <b-pagination-nav v-if="+catalog.pages > 0" :link-gen="linkGen" :number-of-pages="+catalog.pages" use-router></b-pagination-nav>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import CatalogFilter from "../components/CatalogFilter";
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "catalog",
    scrollToTop: true,
    components: { CatalogFilter },
    data() {
      return {
        user: {
          firstName: '',
          lastName: ''
        }
      }
    },
    created() {
      this.loadProducts();
      setTimeout(() => {
        this.$watch('user', {
          handler(newVal, oldVal) {
            console.log(newVal, oldVal)
          },
          deep: true
        })
      }, 5000);
    },
    computed: mapGetters({
      catalog: 'Catalog/getProducts'
    }),
    watch: {
      /*'user.firstName'(newVal, oldVal) {
        console.log(newVal, oldVal)
      },*/
      /*user: {
        handler(newVal, oldVal) {
          console.log(newVal, oldVal)
        },
        deep: true
      },*/
      '$route' (to, from) {
        this.setPage(to.query.page);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    methods: {
      ...mapActions({
        loadProducts: 'Catalog/loadProducts',
        setPage: 'Catalog/setPage'
      }),
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    },
  }
</script>

<style scoped>

  .product {
    width: 30%;
    margin: 12px;
  }

  .product-list {
    margin: 0 auto;
  }
</style>
