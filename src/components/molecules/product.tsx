/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { ProductData } from '~/types/product';
import { useProductDetail } from '~/libs/store.module';
import { useNavigate } from 'react-router-dom';

const Product: FC<ProductData> = ({ id, title, category, price, description, image }) => {
  const navigate = useNavigate();
  const { setDetail } = useProductDetail();

  const onProductClickHandler = () => {
    setDetail({ id, title, category, price, description, image });
    navigate('/product');
  };

  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <img
          className='card-img-top bg-dark cover'
          height='200'
          alt=''
          src={image}
          onClick={onProductClickHandler}
        />
        <div className='card-body'>
          <h5 className='card-title text-center text-dark text-truncate'>{title}</h5>
          <p className='card-text text-center text-muted mb-0'>{price}</p>
          <div className='d-grid d-block'>
            <button className='btn btn-outline-dark mt-3'>
              <BsCartPlusFill size={25} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
