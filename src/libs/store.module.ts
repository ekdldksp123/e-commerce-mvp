import { create } from 'zustand';
import { ProductData } from '~/types/product';
import { CartState } from '~/types/store';

export const useCart = create<CartState>((set) => ({
  items: [],
  setItems: (newItems: ProductData[]) => set({ items: newItems }),
}));
