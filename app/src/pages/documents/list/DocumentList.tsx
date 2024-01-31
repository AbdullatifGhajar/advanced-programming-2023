import { List } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItem from './DocumentListItem';

interface DocumentListProps {
  documentOverviewList: DocumentOverview[];
}

const DocumentList: React.FC<DocumentListProps> = ({
  documentOverviewList,
}) => {
  const navigate = useNavigate();

  const handleDocumentClick = (id: string) => {
    navigate(`/student/documents/${id}`);
  };

  return (
    <List>
      {documentOverviewList.map((documentOverview) => (
        <DocumentListItem
          key={documentOverview.id}
          documentOverview={documentOverview}
          onClick={handleDocumentClick}
        />
      ))}
    </List>
  );
};

export default DocumentList;
