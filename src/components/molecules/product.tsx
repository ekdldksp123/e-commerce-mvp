import { FC } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { ProductData } from '~/types/product';
import { Link } from 'react-router-dom';
import { ButtonWithIcon } from '../atoms/button-group';
import { useCart } from '~/libs/store.module';
import { setCartData } from '~/libs/storage.module';

const Product: FC<ProductData> = ({ id, title, category, price, description, image }) => {
  const { items, setItems } = useCart();

  const onAddCart = () => {
    const copyItems = [...items];
    const findItem = copyItems.find((v) => v.id === id);

    if (findItem) {
      findItem.amount += 1;
      const index = copyItems.findIndex((v) => v.id === id);
      copyItems[index] = findItem;
    } else {
      const productData: ProductData = {
        id: id,
        image: image,
        title: title,
        category: category,
        price: price,
        description: description,
      };
      copyItems.push({ ...productData, amount: 1 });
    }
    setItems(copyItems);
    setCartData(copyItems);
  };

  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <Link to={`product/${id}`}>
          <img className='card-img-top bg-dark cover' height='200' alt='' src={image} />
        </Link>
        <div className='card-body'>
          <h5 className='card-title text-center text-dark text-truncate'>{title}</h5>
          <p className='card-text text-center text-muted mb-0'>$ {price}</p>
          <div className='d-grid d-block'>
            <ButtonWithIcon
              icon={<BsCartPlusFill size={25} />}
              text='Add to cart'
              onClickHandler={onAddCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
