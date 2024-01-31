import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import TutorDocumentListPage from './TutorDocumentListPage';
function TutorRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="documents" />} />
        <Route path="/documents" element={<TutorDocumentListPage />} />
      </Routes>
    </MainLayout>
  );
}

export default TutorRoutes;
