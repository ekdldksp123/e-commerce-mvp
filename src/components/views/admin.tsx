import { FC } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '~/libs/api.module';
import { ProductData } from '~/types/product';
import { ContainerCenter } from '../atoms/container-group';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import { Spinner } from '../atoms/spinner';

const AdminPage: FC = () => {
  const navigate = useNavigate();
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

  const onClickAdd = () => navigate('/add');

  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <button type='button' className='btn btn-primary' onClick={() => onClickAdd()}>
        Add
      </button>
      <hr />
      <ContainerCenter>
        <table className='table'>
          <tbody>
            {data.length > 0 &&
              data.map((item: ProductData, index: number) => (
                <tr key={`cart-item-${index}`}>
                  <th scope='row'>
                    <Link to={`/product/${item.id}`}>
                      <img
                        className='card-img-top bg-dark cover'
                        width='100'
                        alt=''
                        src={item.image}
                      />
                    </Link>
                  </th>
                  <td>
                    <Link to={`/product/${item.id}`}>
                      <b>{item.title}</b>
                    </Link>
                    <br />
                    <br />
                    <span>{item.description}</span>
                  </td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </ContainerCenter>
    </div>
  );
};

export default AdminPage;
