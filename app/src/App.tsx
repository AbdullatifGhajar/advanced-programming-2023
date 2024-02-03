import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ForgotPassword from './pages/authentication/ForgotPasswordPage';
import Login from './pages/authentication/LoginPage';
import Register from './pages/authentication/RegisterPage';
import StudentRoutes from './pages/student/StudentRoutes';
import TutorRoutes from './pages/tutor/TutorRoutes';

import { UserRole } from './models/User';
import ProtectRoutes from './services/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<HomePage />} />

        {/* only allow students to access students routes, same for tutor */}
        <Route
          path="/student/*"
          element={ProtectRoutes({
            routes: <StudentRoutes />,
            role: UserRole.Student,
          })}
        />
        <Route
          path="/tutor/*"
          element={ProtectRoutes({
            routes: <TutorRoutes />,
            role: UserRole.Tutor,
          })}
        />
      </Routes>
    </Router>
  );
}

export default App;
