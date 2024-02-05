import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';

import AuthenticationRoutes from './pages/authentication/AuthenticationRoutes';
import StudentRoutes from './pages/student/StudentRoutes';
import TutorRoutes from './pages/tutor/TutorRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* only allow students to access students routes, same for tutor */}
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/tutor/*" element={<TutorRoutes />} />

        <Route path="/*" element={<AuthenticationRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
