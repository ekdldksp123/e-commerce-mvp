import { FC } from 'react';
import { useQuery } from 'react-query';
import { getAllProducts } from '~/libs/api.module';
import { ProductData } from '~/types/product';

const ProductList: FC = () => {
  const { isLoading, error, data } = useQuery('products', getAllProducts);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error: {error}</>;
  }

  return (
    <ul>
      {data.map((product: ProductData) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default ProductList;
