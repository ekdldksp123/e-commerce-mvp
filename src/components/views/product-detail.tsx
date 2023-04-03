import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setCartData } from '~/libs/storage.module';
import { useCart } from '~/libs/store.module';
import ScrollToTopOnMount from '../atoms/scroll-to-top';

const ProductDetail: FC = () => {
  const location = useLocation();
  const { items, setItems } = useCart();
  const { id, image, title, category, price, description } = location.state;

  const onAddCart = () => {
    const copyItems = [...items];
    const findItem = copyItems.find((v) => v.id === id);

    if (findItem) {
      findItem.amount += 1;
      const index = copyItems.findIndex((v) => v.id === id);
      copyItems[index] = findItem;
    } else {
      copyItems.push({ id, image, title, category, price, description, amount: 1 });
    }
    setItems(copyItems);
    setCartData(copyItems);
  };

  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <nav aria-label='breadcrumb' className='bg-custom-light rounded mb-4'>
        <ol className='breadcrumb p-3'>
          <li className='breadcrumb-item'>
            <Link className='text-decoration-none link-secondary' to='/products'>
              All Prodcuts
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <a className='text-decoration-none link-secondary' href='!#'>
              {category}
            </a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            {title}
          </li>
        </ol>
      </nav>
      <div className='row mb-4'>
        <div className='d-none d-lg-block col-lg-1'>
          <div className='image-vertical-scroller'>
            <div className='d-flex flex-column'>
              {Array.from({ length: 10 }, (_, i) => {
                const selected = i !== 1 ? 'opacity-6' : '';
                return (
                  <img key={i} className={'rounded mb-2 ratio ' + selected} alt='' src={image} />
                );
              })}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-12 mb-4'>
              <img className='border rounded ratio ratio-1x1' alt='' src={image} />
            </div>
          </div>
        </div>

        <div className='col-lg-5'>
          <div className='d-flex flex-column h-100'>
            <h2 className='mb-1'>{title}</h2>
            <h4 className='text-muted mb-4'>$ {price}</h4>

            <div className='row g-3 mb-4'>
              <div className='col'>
                <button className='btn btn-outline-dark py-2 w-100' onClick={onAddCart}>
                  Add to cart
                </button>
              </div>
              <div className='col'>
                <button className='btn btn-dark py-2 w-100'>Buy now</button>
              </div>
            </div>

            <h4 className='mb-0'>Details</h4>
            <hr />
            <dl className='row'>
              <dt className='col-sm-4'>Category</dt>
              <dd className='col-sm-8 mb-3'>{category}</dd>

              <dt className='col-sm-4'>Status</dt>
              <dd className='col-sm-8 mb-3'>Instock</dd>
            </dl>

            <h4 className='mb-0'>Description</h4>
            <hr />
            <p className='lead flex-shrink-0'>
              <small>{description}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
