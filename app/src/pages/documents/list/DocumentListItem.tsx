import React from 'react';
import { ListItem, Card, CardContent, Box } from '@mui/material';

import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItemApprovalSection from './DocumentListItemApprovalSection';
import DocumentListItemMainSection from './DocumentListItemMainSection';

interface DocumentListItemProps {
  documentOverview: DocumentOverview;
  onClick: (id: string) => void;
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({
  documentOverview,
  onClick,
}) => {
  return (
    <ListItem key={documentOverview.id}>
      <Card
        onClick={() => onClick(documentOverview.id)}
        sx={{ width: '100%', cursor: 'pointer' }}
      >
        <CardContent>
          <Box
            flexDirection={'row'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <DocumentListItemMainSection documentOverview={documentOverview} />
            <DocumentListItemApprovalSection
              approvals={documentOverview.approvals}
            />
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default DocumentListItem;
