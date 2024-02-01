import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

import DocumentDetailsPage from '../student/DocumentDetailsPage';
import StudentListPage from './ApprovalListPage';
import StudentDetailsAndDocumentsPage from './StudentDetailsAndDocumentsPage';
function TutorRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="approvals" />} />
        <Route path="/approvals" element={<StudentListPage />} />

        <Route
          path="/approvals/:studentId"
          element={<Navigate to={`documents`} />}
        />
        <Route
          path="/approvals/:studentId/documents"
          element={<StudentDetailsAndDocumentsPage />}
        />
        <Route
          path="/approvals/:studentId/documents/:documentId"
          element={<DocumentDetailsPage />}
        />
      </Routes>
    </MainLayout>
  );
}

export default TutorRoutes;
