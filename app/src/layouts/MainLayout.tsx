import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';

import Header from '../components/Header';
import PageBody from '../components/PageBody';

import UsersButton from '../components/buttons/ApprovalsButton';
import DocumentsButton from '../components/buttons/DocumentsButton';
import HomeButton from '../components/buttons/HomeButton';
import AuthenticationService from '../services/AuthenticationService';

import User from '../models/User';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const authenticationService = new AuthenticationService();
    authenticationService
      .userInfo()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header
        user={user}
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
