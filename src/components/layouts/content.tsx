import { FC } from 'react';
import { ContentProps } from '~/types/props';

const Content: FC<ContentProps> = ({ children }) => {
  return <main className='flex-shrink-0 bg-light'>{children}</main>;
};

export default Content;
