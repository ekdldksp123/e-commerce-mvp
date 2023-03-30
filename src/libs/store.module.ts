import { create } from 'zustand';
import { ProductData } from '~/types/product';
import { ProductDetail } from '~/types/store';

export const useProductDetail = create<ProductDetail>((set) => ({
  setDetail: (newDetail: ProductData) => set({ detail: newDetail }),
}));
