import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import ApprovalDetails from '../../components/approvals/ApprovalList';
import DocumentDetails from '../../components/documents/details/DocumentDetails';
import Document from '../../models/Document';
import DocumentService from '../../services/DocumentService';

const DocumentDetailsPage = () => {
  const navigate = useNavigate();

  const { documentId } = useParams<{ documentId: string }>();
  const [document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    if (documentId == null) return;

    const documentService = new DocumentService();
    documentService
      .fetchDocument(documentId)
      .then((document) => {
        setDocument(document);
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    saveDocument()
      .then(() => {
        navigate('..'); // return to document page
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title={document.name} backButton={true} />
      <DocumentDetails
        document={document}
        setDocument={setDocument}
        handleSubmit={handleSubmit}
      />
      <ApprovalDetails approvals={document.approvals} />
    </Box>
  );
};

export default DocumentDetailsPage;
