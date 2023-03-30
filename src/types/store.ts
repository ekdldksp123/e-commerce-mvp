import { ProductData } from './product';

export interface ProductDetail {
  detail?: ProductData;
  setDetail: (newDetail: ProductData) => void;
}
