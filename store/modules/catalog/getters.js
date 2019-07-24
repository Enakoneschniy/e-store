export default {
  getNewProducts(state) {
    return state.products.filter(product => product.isNew).slice(0, 10)
  },
  getRecommendedProducts(state) {
    return state.products.filter(product => product.isRecommended).slice(0, 12)
  },
  getProducts(state) {
    return state.products
  }
}
