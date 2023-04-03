import { create } from 'zustand';
import { ProductData } from '~/types/product';
import { CartState } from '~/types/store';
import { getCartData } from './storage.module';

export const useCart = create<CartState>((set) => ({
  items: getCartData(),
  setItems: (newItems: ProductData[]) => set({ items: newItems }),
}));
