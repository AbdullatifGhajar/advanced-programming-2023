import { Box } from '@mui/material';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import DocumentList from '../../components/documents/list/DocumentList';
import DocumentOverview from '../../models/DocumentOverview';
import DocumentService from '../../services/DocumentService';

const DocumentListPage = () => {
  const [documentOverviewList, setDocumentOverviewList] = React.useState<
    DocumentOverview[]
  >([]);


  React.useEffect(() => {
    const documentService = new DocumentService();
    documentService
      .fetchDocumentOverview()
      .then((data) => {
        setDocumentOverviewList(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Documents" backButton={true} />
      <DocumentList documentOverviewList={documentOverviewList} />
    </Box>
  );
};

export default DocumentListPage;
