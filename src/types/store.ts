import { ProductData } from './product';

export interface CartState {
  items: CartItem[];
  setItems: (item: CartItem[]) => void;
}

export interface CartItem extends ProductData {
  amount: number;
}
