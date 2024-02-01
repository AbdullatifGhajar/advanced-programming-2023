import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ForgotPassword from './pages/authentication/ForgotPasswordPage';
import Login from './pages/authentication/LoginPage';
import Register from './pages/authentication/RegisterPage';
import StudentRoutes from './pages/student/StudentRoutes';
import TutorRoutes from './pages/tutor/TutorRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/tutor/*" element={<TutorRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
