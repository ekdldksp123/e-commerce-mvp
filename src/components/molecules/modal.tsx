import { FC } from 'react';
import { ModalProps } from '~/types/props';

const Modal: FC<ModalProps> = ({ toggle, hide, title, onConfirm, children }) => {
  if (!toggle) return null;
  else
    return (
      <div className='modal' id='modal' tabIndex={-1} role='dialog'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{title}</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={onConfirm}>
                Confirm
              </button>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Modal;
