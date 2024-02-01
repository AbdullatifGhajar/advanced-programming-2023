import React, { HTMLAttributes, ReactNode, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PageBody from '../components/PageBody';

import UsersButton from '../components/buttons/ApprovalsButton';
import DocumentsButton from '../components/buttons/DocumentsButton';
import HomeButton from '../components/buttons/HomeButton';
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
      <Header
        username={username}
        navigationButtons={[
          // TODO: based on the user role, show different buttons
          <HomeButton />,
          <DocumentsButton />,
          <UsersButton />,
        ]}
      />

      <PageBody>{children}</PageBody>
    </>
  );
};

export default MainLayout;
