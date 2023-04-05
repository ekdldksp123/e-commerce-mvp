import { FC } from 'react';
import { ButtonWithIconProps } from '~/types/props';

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ icon, text, onClickHandler }) => {
  return (
    <button className='btn btn-outline-dark mt-3' onClick={onClickHandler}>
      {icon} {text}
    </button>
  );
};
