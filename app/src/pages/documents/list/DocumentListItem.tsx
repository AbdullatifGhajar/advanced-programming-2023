import { Box, Card, CardContent, ListItem } from '@mui/material';
import React from 'react';

import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItemApprovalSection from '../../approvals/ApprovalInfo';
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
            {documentOverview.approvals && (
              <DocumentListItemApprovalSection
                approvals={documentOverview.approvals}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default DocumentListItem;
