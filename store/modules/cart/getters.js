export default {
  getCartCount(state) {
    return state.products.reduce((count, p) => count + p.quantity, 0)
  },
  getProducts(state) {
    return state.products
  }
}
