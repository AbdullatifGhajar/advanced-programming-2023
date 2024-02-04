import { Navigate, Route, Routes } from 'react-router-dom';
import DocumentDetailsPage from './DocumentDetailsPage';
import DocumentListPage from './DocumentListPage';

import MainLayout from '../../layouts/MainLayout';
function StudentRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="documents" />} />
        <Route path="documents" element={<DocumentListPage />} />
        <Route path="documents/:documentId" element={<DocumentDetailsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default StudentRoutes;
