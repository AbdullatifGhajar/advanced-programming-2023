import { HTMLAttributes, ReactNode } from 'react';

import Header from '../components/Header';
import PageBody from '../components/PageBody';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <PageBody>{children}</PageBody>
    </>
  );
};

export default MainLayout;
