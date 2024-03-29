import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

import StudentListPage from './ApprovalListPage';
import DocumentDetailsPage from './DocumentDetailsPage';
import StudentDetailsAndDocumentsPage from './StudentDetailsAndDocumentsPage';

const TutorRoutes = () => {
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
};

export default TutorRoutes;
