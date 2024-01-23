import React from 'react';
import { HTMLAttributes, ReactNode, useEffect } from 'react';

import Header from '../components/Header';
import PageBody from '../components/PageBody';
import { useNavigate } from 'react-router-dom';
import JsonWebToken from '../models/JsonWebToken';

import { jwtDecode } from 'jwt-decode';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [username, setUsername] = React.useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', {
        state: {
          origin: window.location.pathname,
        },
      });
    } else {
      setUsername(jwtDecode<JsonWebToken>(token).name);
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
