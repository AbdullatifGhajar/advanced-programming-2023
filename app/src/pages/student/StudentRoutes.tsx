import { Navigate, Route, Routes } from 'react-router-dom';
import StudentDocumentDetailsPage from './StudentDocumentDetailsPage';
import StudentDocumentListPage from './StudentDocumentListPage';

import MainLayout from '../../layouts/MainLayout';
function StudentRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="documents" />} />
        <Route path="documents" element={<StudentDocumentListPage />} />
        <Route path="documents/:id" element={<StudentDocumentDetailsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default StudentRoutes;
