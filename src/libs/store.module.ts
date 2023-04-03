import { create } from 'zustand';
import { CartItem, CartState } from '~/types/store';
import { getCartData } from './storage.module';

export const useCart = create<CartState>((set) => ({
  items: getCartData(),
  setItems: (newItems: CartItem[]) => set({ items: newItems }),
}));
