import { HTMLAttributes, ReactNode } from 'react';

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
  const authenticationHandler = new AuthenticationHandler();
  const username = authenticationHandler.getUserName();

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
