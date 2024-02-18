import { useHistory } from 'react-router-dom';
import { productService } from './services/productService';

export function navigateToProduct(product) {
  this.selectedProducts[product] = true;
  productService.setCurrentProduct(product);
  history.push(`/products/${product.name}/${product.colour}`);
}

export function getImageUrl(baseImageUrl, width, height) {
  return `${baseImageUrl}&wid=${width}&hei=${height}`;
}
