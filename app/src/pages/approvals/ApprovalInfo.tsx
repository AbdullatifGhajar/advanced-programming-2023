import { Cancel, CheckCircle } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { green, red } from '@mui/material/colors';
import React from 'react';
import Approval from '../../models/Approval';

interface DocumentListItemApprovalSectionProps {
  approvals: Approval[];
}

const DocumentListItemApprovalSection: React.FC<
  DocumentListItemApprovalSectionProps
> = ({ approvals }) => {
  return (
    <Box sx={{ justifyContent: 'flex-end' }}>
      {approvals.map((approval) => (
        <Tooltip title={approval.tutor?.name} key={approval.id}>
          <IconButton sx={{ color: approval.isGiven ? green[500] : red[500] }}>
            {approval.isGiven ? <CheckCircle /> : <Cancel />}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default DocumentListItemApprovalSection;
