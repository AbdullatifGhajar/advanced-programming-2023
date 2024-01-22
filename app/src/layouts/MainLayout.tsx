import { HTMLAttributes, ReactNode, useEffect } from 'react';

import Header from '../components/Header';
import PageBody from '../components/PageBody';
import { useNavigate } from 'react-router-dom';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token == null) {
      navigate("/login", {
        state: { 
          origin: window.location.pathname
        }
      });
    }
  });

  return (
    <>
      <Header />
      <PageBody>{children}</PageBody>
    </>
  );
};

export default MainLayout;
