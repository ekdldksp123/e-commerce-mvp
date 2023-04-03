import axios from 'axios';
import { ProductData } from '~/types/product';

// get all products
export const getAllProducts = async () => {
  return axios.get('https://fakestoreapi.com/products').then((res) => res.data);
};

// get single product
export const getASingleProduct = async (id?: string) => {
  if (id) return axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data);
  else throw new Error('No product id provided');
};

// add new product
export const createProduct = async (productData: ProductData) => {
  return axios.post('https://fakestoreapi.com/products', productData).then((res) => res.data);
};
