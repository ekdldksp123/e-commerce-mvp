import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllProducts } from '~/libs/api.module';
import { ProductData } from '~/types/product';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import Product from '../molecules/product';

const ProductList: FC = () => {
  const [viewType, setViewType] = useState({ grid: true });
  const { isLoading, error, data } = useQuery('products', getAllProducts);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error: {error}</>;
  }

  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <div
        className={
          'row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 ' +
          (viewType.grid ? 'row-cols-xl-3' : 'row-cols-xl-2')
        }
      >
        {data.map((product: ProductData) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
