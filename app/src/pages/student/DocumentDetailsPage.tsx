import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import Document from '../../models/Document';
import DocumentService from '../../services/DocumentService';
import ApprovalDetails from '../approvals/ApprovalList';
import DocumentDetails from '../documents/details/DocumentDetailsPage';

const DocumentDetailsPage = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [document, setDocument] = useState<Document | null>(null);

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
      <PageTitle title={document.name} backButton={true} />
      <DocumentDetails
        document={document}
        setDocument={setDocument}
        saveDocument={saveDocument}
      />
      <ApprovalDetails approvals={document.approvals} />
    </Box>
  );
};

export default DocumentDetailsPage;
