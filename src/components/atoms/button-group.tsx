import { FC, ReactNode } from 'react';

interface ButtonWithIconProps {
  icon: ReactNode;
  text: string;
  onClickHandler: () => void;
}
export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ icon, text, onClickHandler }) => {
  return (
    <button className='btn btn-outline-dark mt-3' onClick={onClickHandler}>
      {icon} {text}
    </button>
  );
};
