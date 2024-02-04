import { Box, Typography } from '@mui/material';
import React from 'react';

import DocumentOverview from '../../../models/DocumentOverview';

interface DocumentListItemMainSectionProps {
  documentOverview: DocumentOverview;
}

const DocumentListItemMainSection: React.FC<
  DocumentListItemMainSectionProps
> = ({ documentOverview }) => {
  const formattedDeadline = new Date(
    documentOverview.deadline,
  ).toLocaleDateString();

  return (
    <Box flexDirection={'column'} display={'flex'}>
      <Typography variant="h6" component="div">
        {documentOverview.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`deadline: ${formattedDeadline}`}
      </Typography>
    </Box>
  );
};

export default DocumentListItemMainSection;
