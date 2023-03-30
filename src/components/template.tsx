import { FC } from 'react';
import { ContentProps } from '~/types/props';
import Content from './layouts/content';
import Footer from './layouts/footer';
import Header from './layouts/header';

const Template: FC<ContentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Template;
