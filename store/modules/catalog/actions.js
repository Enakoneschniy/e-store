import {SET_PRODUCTS} from "./mutation-types";

export default {
  async loadProducts({ commit }) {
    try {
      const products = await this.$axios.$get('/catalog.json');
      commit(SET_PRODUCTS, products)
    } catch (e) {
      console.warn('loadProducts', e)
    }
  }
}
