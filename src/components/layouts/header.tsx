import { FaShopify } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

const Header: FC = () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const changeNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  };

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/' onClick={changeNav}>
            <FaShopify size={25} />
            <span className='ms-2 h5'>Shop</span>
          </Link>

          <div className={'navbar-collapse offcanvas-collapse ' + (openedDrawer ? 'open' : '')}>
            <ul className='navbar-nav me-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to='/admin' className='nav-link' replace onClick={changeNav}>
                  Admin
                </Link>
              </li>
            </ul>
            <button type='button' className='btn btn-outline-dark me-3 d-none d-lg-inline'>
              <RiShoppingCartFill size={20} />
              <span className='ms-3 badge rounded-pill bg-dark'>0</span>
            </button>
          </div>

          <div className='d-inline-block d-lg-none'>
            <button type='button' className='btn btn-outline-dark'>
              <RiShoppingCartFill size={20} />
              <span className='ms-3 badge rounded-pill bg-dark'>0</span>
            </button>
            <button className='navbar-toggler p-0 border-0 ms-3' type='button'></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
