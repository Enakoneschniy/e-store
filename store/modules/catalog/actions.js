import { SET_PRODUCTS, SET_PAGE, SET_FILTERS } from "./mutation-types";

export default {
  async loadProducts({ commit }) {
    let products = [];
    try {
      products = await this.$axios.$get('/catalog.json');

    } catch (e) {
      if(e.response.status === 404) {
        alert('File Not Found!')
      }
      console.warn('loadProducts', e.response)
    }
    commit(SET_PRODUCTS, products)
  },
  setPage({ commit }, page) {
    commit(SET_PAGE, page === undefined ? 1 : page)
  },
  setFilters({ commit }, filters) {
    commit(SET_FILTERS, filters);
  }
}
