import axios from 'axios';
import { ProductData } from '~/types/product';

// get all products
export const getAllProducts = async () => {
  return axios.get('https://fakestoreapi.com/products').then((res) => res.data);
};

// get single product
export const getASingleProduct = async () => {
  return axios.get('https://fakestoreapi.com/products/1').then((res) => res.data);
};

// add new product
export const createProduct = async (productData: ProductData) => {
  return axios.post('https://fakestoreapi.com/products', productData).then((res) => res.data);
};
