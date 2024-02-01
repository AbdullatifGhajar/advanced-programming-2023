import { Box, Card, CardContent, ListItem } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import DocumentOverview from '../../../models/DocumentOverview';
import DocumentListItemApprovalSection from '../../approvals/ApprovalInfo';
import DocumentListItemMainSection from './DocumentListItemMainSection';

interface DocumentListItemProps {
  documentOverview: DocumentOverview;
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({
  documentOverview,
}) => {
  const navigate = useNavigate();

  const handleDocumentClick = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <ListItem key={documentOverview.id}>
      <Card
        onClick={() => handleDocumentClick(documentOverview.id)}
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
