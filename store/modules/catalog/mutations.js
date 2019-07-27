import { SET_PRODUCTS, SET_PAGE, SET_FILTERS } from "./mutation-types";

export default {
  [SET_PRODUCTS](state, products) {
    state.products = products
  },
  [SET_PAGE](state, page) {
    state.currentPage = page
  },
  [SET_FILTERS](state, filters) {
    state.filters = filters
  },
}
