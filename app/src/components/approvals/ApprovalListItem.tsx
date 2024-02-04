import { Box, Card, CardContent, ListItem } from '@mui/material';
import React from 'react';
import Approval from '../../models/Approval';
import ApprovalStatusIcon from './ApprovalStatusIcon';

interface ApprovalListItemProps {
  approval: Approval;
}

const ApprovalListItem: React.FC<ApprovalListItemProps> = ({ approval }) => {
  return (
    <ListItem key={approval.id}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Box
            flexDirection={'row'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Box
              flexDirection={'column'}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Box fontWeight={'bold'} fontSize={24} display={'inline'} mr={1}>
                {approval.tutor.name}
              </Box>
              <Box
                fontWeight={'normal'}
                fontSize={14}
                display={'inline'}
                mr={1}
              >
                {approval.comment}
              </Box>
            </Box>
            <ApprovalStatusIcon isGiven={approval.isGiven} />
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default ApprovalListItem;
