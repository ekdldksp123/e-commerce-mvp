import { FC } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { ProductData } from '~/types/product';
import { Link } from 'react-router-dom';

const Product: FC<ProductData> = ({ id, title, category, price, description, image }) => {
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <Link
          to={`product/${id}`}
          state={{
            image: image,
            title: title,
            category: category,
            price: price,
            description: description,
          }}
        >
          <img className='card-img-top bg-dark cover' height='200' alt='' src={image} />
        </Link>
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
