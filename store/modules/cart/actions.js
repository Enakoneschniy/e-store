import { ADD_TO_CART } from "./mutation-types";

export default {
  addToCart({ commit }, { quantity = 1, product }) {
    const cartProduct = Object.assign({}, product,  {quantity});
    commit(ADD_TO_CART, cartProduct);
  }
}
