import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

import TutorUserListPage from './TutorApprovalListPage';
import TutorStudentDetailsPage from './TutorStudentDetailsPage';
function TutorRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="approvals" />} />
        <Route path="/approvals" element={<TutorUserListPage />} />
        <Route path="/approvals/:id" element={<TutorStudentDetailsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default TutorRoutes;
