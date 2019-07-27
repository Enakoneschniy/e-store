export default {
  getNewProducts(state) {
    return state.products.filter(product => product.isNew).slice(0, 10)
  },
  getRecommendedProducts(state) {
    try {
      return state.products.filter(product => product.isRecommended).slice(0, 12)
    } catch (e) {
      console.log(e.message)
      return [];
    }
  },
  getProducts(state) {
    const products = state.products
      .filter(product => {
        return product.brand.indexOf(state.filters.brand) !== -1
      })
      .filter(product => {
        return product.model.indexOf(state.filters.model) !== -1
      });
    console.log(products);
    const chunkedProducts = chunk(products, 12);
    return {
      pages: chunkedProducts.length,
      products: chunkedProducts[state.currentPage - 1]
    }
  }
}

function chunk(array, chunkSize) {
  const resultArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    resultArray.push(array.slice(i, i + chunkSize));
  }

  return resultArray
}
