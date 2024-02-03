import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationHandler from './AuthenticationHandler';

import { UserRole } from '../models/User';

interface ProtectedRoutesProps {
  routes: React.ReactNode;
  role: UserRole;
}

const ProtectRoutes = ({ routes, role }: ProtectedRoutesProps) => {
  const authHandler = new AuthenticationHandler();

  if (!authHandler.isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  // TODO: check for role and allow access to the routes

  return <>{routes}</>;
};

export default ProtectRoutes;
