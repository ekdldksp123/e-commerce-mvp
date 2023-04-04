import { ChangeEvent, FC } from 'react';
import { Link } from 'react-router-dom';
import { setCartData } from '~/libs/storage.module';
import { useCart } from '~/libs/store.module';
import { ContainerCenter } from '../atoms/container-group';
import ScrollToTopOnMount from '../atoms/scroll-to-top';

const Cart: FC = () => {
  const { items, setItems } = useCart();

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    if (e.target.value === '0') {
      onDeleteItem(index);
    } else {
      const copyItems = [...items];
      copyItems[index].amount = parseInt(e.target.value);
      setItems(copyItems);
      setCartData(copyItems);
    }
  };

  const onDeleteItem = (index: number) => {
    const copyItems = [...items];
    copyItems.splice(index, 1);
    setItems(copyItems);
    setCartData(copyItems);
  };

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
                  <td>
                    <input
                      type='number'
                      className='form-control'
                      value={item.amount}
                      onChange={(e) => onChangeAmount(e, index)}
                    />
                  </td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-outline-dark me-3 d-none d-lg-inline'
                      onClick={() => onDeleteItem(index)}
                    >
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
