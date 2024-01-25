import { Box, List } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../components/PageTitle';
import MainLayout from '../../../layouts/MainLayout';
import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItem from './DocumentListItem';

const DocumentsPage: React.FC = () => {
  const [documentOverviewList, setDocumentOverviewList] = React.useState<
    DocumentOverview[]
  >([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Récupérer des documents de test
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
