let currentProduct = null;

const ProductService = {
  setCurrentProduct: (product) => {
    currentProduct = product;
  },
  getCurrentProduct: () => {
    return currentProduct;
  }
};

export default ProductService;
