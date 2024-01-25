import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List } from '@mui/material';
import { api } from '../../services/AxiosService';

import DocumentOverview from '../../models/DocumentOverview';
import DocumentListItem from './DocumentListItem';
import PageTitle from '../../components/PageTitle';

import MainLayout from '../../layouts/MainLayout';

const DocumentsPage = () => {
  const [documentOverviewList, setDocumentOverviewList] = React.useState<
    DocumentOverview[]
  >([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .get('/documents')
      .then((response) => response.data)
      .then((data) => {
        setDocumentOverviewList(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDocumentClick = (id: string) => {
    navigate(`/documents/${id}`);
  };

  return (
    <MainLayout>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <PageTitle title="Documents" />
        <List>
          {documentOverviewList.map((documentOverview) => (
            <DocumentListItem
              key={documentOverview.id}
              documentOverview={documentOverview}
              onClick={handleDocumentClick}
            />
          ))}
        </List>
      </Box>
    </MainLayout>
  );
};

export default DocumentsPage;
