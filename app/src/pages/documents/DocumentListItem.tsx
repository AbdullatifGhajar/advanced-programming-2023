import React from 'react';
import { ListItem, Card, CardHeader, Avatar, Box } from '@mui/material';

import DocumentOverview from '../../models/DocumentOverview';

interface DocumentListItemProps {
  documentOverview: DocumentOverview;
  onClick: (id: string) => void;
}

const DocumentListItem: React.FC<DocumentListItemProps> = ({
  documentOverview,
  onClick,
}) => {
  const formattedDeadline = new Date(
    documentOverview.deadline,
  ).toLocaleDateString();


  return (
    <ListItem key={documentOverview.id}>
      <Card
        onClick={() => onClick(documentOverview.id)}
        sx={{ width: '100%', cursor: 'pointer' }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="Document">
              D
            </Avatar>
          }
          title={documentOverview.name}
          subheader={`deadline: ${formattedDeadline}`}
        />
        <Box display="flex" flexDirection="column">
          {documentOverview.approvals.map((approval) => (
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: approval.given ? 'green' : 'red',
              }}
            />
          ))}
        </Box>
      </Card>
    </ListItem>
  );
};

export default DocumentListItem;
