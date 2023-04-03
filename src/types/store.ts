import { ProductData } from './product';

export interface CartState {
  items: ProductData[];
  setItems: (item: ProductData[]) => void;
}
