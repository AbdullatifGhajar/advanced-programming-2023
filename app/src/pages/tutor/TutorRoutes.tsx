import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

import StudentDetailsAndDocumentsPage from './StudentDetailsAndDocumentsPage';
import StudentListPage from './TutorApprovalListPage';
function TutorRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="approvals" />} />
        <Route path="/approvals" element={<StudentListPage />} />
        <Route
          path="/approvals/:id"
          element={<StudentDetailsAndDocumentsPage />}
        />
      </Routes>
    </MainLayout>
  );
}

export default TutorRoutes;
