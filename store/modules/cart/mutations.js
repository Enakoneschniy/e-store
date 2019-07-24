import { ADD_TO_CART } from "./mutation-types";

export default {
  [ADD_TO_CART](state, product) {
    const index = state.products.findIndex(p => p.id === product.id);
    if (index === -1) {
      state.products.push(product);
    } else {
      state.products[index].quantity++;
      /*state.products = state.products.splice(
        index,
        1,
        Object.assign({}, state.products[index], { quantity: state.products[index].quantity + 1 }));*/
    }
  }
}
