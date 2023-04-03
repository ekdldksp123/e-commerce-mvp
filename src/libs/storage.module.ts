import { CartItem } from '~/types/store';

export const setCartData = (items: CartItem[]) => {
  localStorage.setItem('cartData', JSON.stringify(items));
};

export const getCartData = () => {
  const cartData = localStorage.getItem('cartData');
  if (!cartData) return [];
  return JSON.parse(cartData) as CartItem[];
};

export const removeCartData = () => {
  localStorage.removeItem('cartData');
};
