import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import DocumentDetailsPage from './pages/documents/details/DocumentDetailsPage';
import DocumentsPage from './pages/documents/list/DocumentsPage';
import Register from './pages/authentication/RegisterPage';
import Login from './pages/authentication/LoginPage';
import ForgotPassword from './pages/authentication/ForgotPasswordPage';
import AdminSpace from './pages/admin/AdminSpace';
import AdminInternshipForm from './pages/admin/AdminInternshipForm';

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
          <Route path="/adminSpace" element={<AdminSpace />} />
          <Route path="/admin-internship-form" element={<AdminInternshipForm />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
