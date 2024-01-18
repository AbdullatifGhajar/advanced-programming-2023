import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import DocumentDetailsPage from './pages/documents/DocumentDetailsPage';
import DocumentsPage from './pages/documents/DocumentsPage';
import Register from './pages/authentication/RegisterPage';
import Login from './pages/authentication/LoginPage';
import ForgotPassword from './pages/authentication/ForgotPasswordPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/documents/:id" element={<DocumentDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
