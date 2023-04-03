import { ProductData } from '~/types/product';

export const setCartData = (items: ProductData[]) => {
  localStorage.setItem('cartData', JSON.stringify(items));
};

export const getCartData = () => {
  const cartData = localStorage.getItem('cartData');
  if (!cartData) return [];
  return JSON.parse(cartData) as ProductData[];
};

export const removeCartData = () => {
  localStorage.removeItem('cartData');
};
