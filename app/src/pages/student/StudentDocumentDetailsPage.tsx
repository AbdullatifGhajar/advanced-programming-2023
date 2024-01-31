import { Box, Button } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Document from '../../models/Document';
import DocumentDetails from '../documents/details/DocumentDetailsPage';
import DocumentService from '../../services/DocumentService';
import { ArrowBack } from '@mui/icons-material';

const StudentDocumentDetailsPage = () => {
  const navigate = useNavigate();

  const { id: documentId } = useParams<{ id: string }>();
  const [document, setDocument] = useState<Document | null>(null);

  // ensure that the documentId is defined
  useEffect(() => {
    if (!documentId) {
      navigate('/student/documents');
    }
  }, [documentId, navigate]);

  // Fetch form template from backend
  useEffect(() => {
    if (documentId == null) return;

    fetch(`http://localhost:8081/documents/${documentId}`)
      .then((response) => response.json())
      .then((data) => {
        setDocument(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [documentId]);

  // document is now defined for the rest of the component
  if (!document) return null;

  const saveDocument = async () => {
    const documentService = new DocumentService();
    documentService.saveDocument(document);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box display="flex" justifyContent="center">
        <Button
          color="primary"
          onClick={() => navigate('/student/documents')}
          startIcon={<ArrowBack />}
        />
        <PageTitle title={document.name} />
      </Box>
      <DocumentDetails
        document={document}
        setDocument={setDocument}
        saveDocument={saveDocument}
      />
    </Box>
  );
};

export default StudentDocumentDetailsPage;
