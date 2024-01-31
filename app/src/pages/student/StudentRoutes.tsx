import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDocumentListPage from './StudentDocumentListPage';
import StudentDocumentDetailsPage from './StudentDocumentDetailsPage';

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
