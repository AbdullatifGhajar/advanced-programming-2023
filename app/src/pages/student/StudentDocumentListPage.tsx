import DocumentList from '../documents/list/DocumentList';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import React from 'react';
import DocumentOverview from '../../models/DocumentOverview';

const StudentDocumentListPage = () => {
  const [documentOverviewList, setDocumentOverviewList] = React.useState<
    DocumentOverview[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:8081/documents')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDocumentOverviewList(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Documents" />
      <DocumentList documentOverviewList={documentOverviewList} />
    </Box>
  );
};

export default StudentDocumentListPage;
