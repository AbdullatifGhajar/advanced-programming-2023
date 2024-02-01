import { List } from '@mui/material';
import React from 'react';
import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItem from './DocumentListItem';

interface DocumentListProps {
  documentOverviewList: DocumentOverview[];
}

const DocumentList: React.FC<DocumentListProps> = ({
  documentOverviewList,
}) => {
  return (
    <List>
      {documentOverviewList.map((documentOverview) => (
        <DocumentListItem
          key={documentOverview.id}
          documentOverview={documentOverview}
        />
      ))}
    </List>
  );
};

export default DocumentList;
