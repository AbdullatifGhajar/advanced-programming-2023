import { Box } from '@mui/material';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import DocumentOverview from '../../models/DocumentOverview';
import DocumentList from '../documents/list/DocumentList';

const DocumentListPage = () => {
  const [documentOverviewList, setDocumentOverviewList] = React.useState<
    DocumentOverview[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:8081/documents')
      .then((response) => response.json())
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
