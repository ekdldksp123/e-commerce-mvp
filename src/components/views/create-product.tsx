import { FC } from 'react';
import { ContainerCenter } from '../atoms/container-group';
import ScrollToTopOnMount from '../atoms/scroll-to-top';

const CreateProduct: FC = () => {
  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <ContainerCenter>
        <ContainerCenter style={{ width: '60%' }}>
          <h4 className='mb-5'>Create Product</h4>
          <input type='file' className='form-control' title='product image' name='image' />
          <div className='form-floating w-100 my-3'>
            <input type='text' className='form-control' id='floatingTitle' placeholder='Title' />
            <label htmlFor='floatingTitle'>Title</label>
          </div>
          <div className='form-floating w-100 mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingCategory'
              placeholder='Category'
            />
            <label htmlFor='floatingCategory'>Category</label>
          </div>
          <div className='form-floating w-100 mb-3'>
            <input type='number' className='form-control' id='floatingPrice' placeholder='Price' />
            <label htmlFor='floatingPrice'>Price</label>
          </div>
          <div className='form-floating w-100 mb-3'>
            <textarea
              className='form-control'
              placeholder='Description'
              id='floatingTextarea'
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor='floatingTextarea'>Description</label>
          </div>
          <button type='button' className='w-100 btn btn-primary btn-lg btn-block'>
            Submit
          </button>
        </ContainerCenter>
      </ContainerCenter>
    </div>
  );
};

export default CreateProduct;
