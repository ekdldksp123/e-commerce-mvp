import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import { useProductDetail } from '~/libs/store.module';

function ProductDetail() {
  const { detail } = useProductDetail();

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
              Cases &amp; Covers
            </a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            {detail?.title}
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
                  <a key={i} href='!#'>
                    <img className={'rounded mb-2 ratio ' + selected} alt='' src={detail?.image} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-12 mb-4'>
              <img className='border rounded ratio ratio-1x1' alt='' src={detail?.image} />
            </div>
          </div>
        </div>

        <div className='col-lg-5'>
          <div className='d-flex flex-column h-100'>
            <h2 className='mb-1'>{detail?.title}</h2>
            <h4 className='text-muted mb-4'>{detail?.price} $</h4>

            <div className='row g-3 mb-4'>
              <div className='col'>
                <button className='btn btn-outline-dark py-2 w-100'>Add to cart</button>
              </div>
              <div className='col'>
                <button className='btn btn-dark py-2 w-100'>Buy now</button>
              </div>
            </div>

            <h4 className='mb-0'>Details</h4>
            <hr />
            <dl className='row'>
              <dt className='col-sm-4'>Code</dt>
              <dd className='col-sm-8 mb-3'>C0001</dd>

              <dt className='col-sm-4'>Category</dt>
              <dd className='col-sm-8 mb-3'>Cases & Covers</dd>

              <dt className='col-sm-4'>Brand</dt>
              <dd className='col-sm-8 mb-3'>iPhone X</dd>

              <dt className='col-sm-4'>Manufacturer</dt>
              <dd className='col-sm-8 mb-3'>Nillkin</dd>

              <dt className='col-sm-4'>Color</dt>
              <dd className='col-sm-8 mb-3'>Red, Green, Blue, Pink</dd>

              <dt className='col-sm-4'>Status</dt>
              <dd className='col-sm-8 mb-3'>Instock</dd>

              <dt className='col-sm-4'>Rating</dt>
              <dd className='col-sm-8 mb-3'></dd>
            </dl>

            <h4 className='mb-0'>Description</h4>
            <hr />
            <p className='lead flex-shrink-0'>
              <small>{detail?.description}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
