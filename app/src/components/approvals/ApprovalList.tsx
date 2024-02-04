import { Box, List } from '@mui/material';
import React from 'react';
import Approval from '../../models/Approval';
import ApprovalListItem from './ApprovalListItem';

import CenteredElement from '../CenteredElement';

interface ApprovalListProps {
  approvals: Approval[];
}

const ApprovalList: React.FC<ApprovalListProps> = ({ approvals }) => {
  return (
    <Box>
      <CenteredElement>
        <h2>ApprovalDetails</h2>
      </CenteredElement>
      <List>
        {approvals.map((approval) => (
          <ApprovalListItem approval={approval} />
        ))}
      </List>
    </Box>
  );
};

export default ApprovalList;
