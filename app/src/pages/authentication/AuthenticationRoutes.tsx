import { Route, Routes } from 'react-router-dom';

import AuthenticationLayout from '../../layouts/AuthenticationLayout';
import ForgotPasswordPage from './ForgotPasswordPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const AuthenticationRoutes = () => {
  return (
    <AuthenticationLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </AuthenticationLayout>
  );
};

export default AuthenticationRoutes;
