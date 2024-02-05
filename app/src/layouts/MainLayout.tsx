import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';

import Header from '../components/Header';
import PageBody from '../components/PageBody';

import ApprovalsButton from '../components/buttons/ApprovalsButton';
import DocumentsButton from '../components/buttons/DocumentsButton';
import HomeButton from '../components/buttons/HomeButton';
import AuthenticationService from '../services/AuthenticationService';

import User from '../models/User';

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [user, setUser] = useState<User>();

  const authenticationService = new AuthenticationService();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
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
          <HomeButton key={'home-button'} />,
          user && user.role === 'student' && (
            <DocumentsButton key={'documents-button'} />
          ),
          user && user.role === 'tutor' && (
            <ApprovalsButton key={'approvals-button'} />
          ),
        ]}
      />

      <PageBody>{children}</PageBody>
    </>
  );
};

export default MainLayout;
