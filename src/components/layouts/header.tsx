import { FaShopify } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FC, useLayoutEffect, useState } from 'react';
import { useCart } from '~/libs/store.module';

const openedDrawer = false;

const Header: FC = () => {
  const { items } = useCart();

  const [amountOfItems, setAmountOfItems] = useState<number>(0);

  useLayoutEffect(() => {
    let amount = 0;
    for (const item of items) {
      amount += item.amount;
    }
    setAmountOfItems(amount);
  }, [items]);

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <FaShopify size={25} />
            <span className='ms-2 h5'>Shop</span>
          </Link>
          <div className={'navbar-collapse offcanvas-collapse ' + (openedDrawer ? 'open' : '')}>
            <ul className='navbar-nav me-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to='/admin' className='nav-link' replace>
                  Admin
                </Link>
              </li>
            </ul>
            <Link to='/cart'>
              <button type='button' className='btn btn-outline-dark me-3 d-none d-lg-inline'>
                <RiShoppingCartFill size={20} />
                <span className='ms-3 badge rounded-pill bg-dark'>{amountOfItems}</span>
              </button>
            </Link>
          </div>

          <div className='d-inline-block d-lg-none'>
            <Link to='/cart'>
              <button type='button' className='btn btn-outline-dark'>
                <RiShoppingCartFill size={20} />
                <span className='ms-3 badge rounded-pill bg-dark'>{amountOfItems}</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
