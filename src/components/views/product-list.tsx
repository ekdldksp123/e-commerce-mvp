import { FC } from 'react';
import { useQuery } from 'react-query';
import { getAllProducts } from '~/libs/api.module';
import { ProductData } from '~/types/product';
import { ContainerCenter } from '../atoms/container-group';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import { Spinner } from '../atoms/spinner';
import Product from '../molecules/product';

const ProductList: FC = () => {
  const { isLoading, error, data } = useQuery('products', getAllProducts);

  if (isLoading) {
    return (
      <ContainerCenter>
        <Spinner />
      </ContainerCenter>
    );
  }

  if (error) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <>Error: {error}</>
      </div>
    );
  }

  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <div
        className={
          'row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3'
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
