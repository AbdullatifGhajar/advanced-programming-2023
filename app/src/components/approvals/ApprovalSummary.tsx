import { Box, Tooltip } from '@mui/material';
import React from 'react';
import Approval from '../../models/Approval';
import ApprovalStatusIcon from './ApprovalStatusIcon';

interface ApprovalSummaryProps {
  approvals: Approval[];
}

const ApprovalSummary: React.FC<ApprovalSummaryProps> = ({ approvals }) => {
  return (
    <Box sx={{ justifyContent: 'flex-end' }}>
      {approvals.map((approval) => (
        <Tooltip title={approval.tutor?.name} key={approval.id}>
          <ApprovalStatusIcon isGiven={approval.isGiven} />
        </Tooltip>
      ))}
    </Box>
  );
};

export default ApprovalSummary;
