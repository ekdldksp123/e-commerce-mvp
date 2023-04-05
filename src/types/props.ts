import { ReactNode } from 'react';

export interface ContentProps {
  children: ReactNode;
}

export interface ModalProps extends ContentProps {
  toggle: boolean;
  hide: () => void;
  title: string;
  onConfirm: () => void;
}

export interface ButtonWithIconProps {
  icon: ReactNode;
  text: string;
  onClickHandler: () => void;
}
