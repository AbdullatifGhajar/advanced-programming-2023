import { Box, List } from '@mui/material';
import React from 'react';
import Approval from '../../models/Approval';
import ApprovalListItem from './ApprovalListItem';

interface ApprovalListProps {
  approvals: Approval[];
}

const ApprovalList: React.FC<ApprovalListProps> = ({ approvals }) => {
  return (
    <Box>
      <h1>ApprovalDetails</h1>
      <List>
        {approvals.map((approval) => (
          <ApprovalListItem approval={approval} />
        ))}
      </List>
    </Box>
  );
};

export default ApprovalList;
