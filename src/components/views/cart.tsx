import { describe } from 'node:test';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '~/libs/store.module';
import { ContainerCenter } from '../atoms/container-group';
import ScrollToTopOnMount from '../atoms/scroll-to-top';

const Cart: FC = () => {
  const { items } = useCart();

  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <ContainerCenter>
        <table className='table'>
          <tbody>
            {items.length > 0 &&
              items.map((item, index) => (
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
                  <td>{item.amount}</td>
                  <td>
                    <button type='button' className='btn btn-outline-dark me-3 d-none d-lg-inline'>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ContainerCenter>
    </div>
  );
};
export default Cart;
