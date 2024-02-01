import React, { HTMLAttributes, ReactNode, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PageBody from '../components/PageBody';

import AuthenticationHandler from '../services/AuthenticationHandler';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [username, setUsername] = React.useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const authenticationHandler = new AuthenticationHandler(navigate);
    if (!authenticationHandler.isLoggedIn()) {
      authenticationHandler.redirect();
    } else {
      setUsername(authenticationHandler.getUserName());
    }
  }, [navigate]);

  return (
    <>
      <Header username={username} />
      <PageBody>{children}</PageBody>
    </>
  );
};

export default MainLayout;
