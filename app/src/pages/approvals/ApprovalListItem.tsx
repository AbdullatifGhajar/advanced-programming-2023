import React from 'react';
import { ListItem, Card, CardContent, Box } from '@mui/material';
import ApprovalOverview from '../../models/ApprovalOverview';
import { useNavigate } from 'react-router-dom';

interface ApprovalListItemProps {
  approvalOverview: ApprovalOverview;
}

const ApprovalListItem: React.FC<ApprovalListItemProps> = ({
  approvalOverview,
}) => {
  const navigate = useNavigate();

  return (
    <ListItem key={approvalOverview.user.id}>
      <Card
        onClick={() => navigate(String(approvalOverview.user.id))}
        sx={{ width: '100%', cursor: 'pointer' }}
      >
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
                {approvalOverview.user.name}
              </Box>
              <Box
                fontWeight={'normal'}
                fontSize={14}
                display={'inline'}
                mr={1}
              >
                {approvalOverview.user.email}
              </Box>
            </Box>
            <Box fontWeight={'bold'} fontSize={32} display={'inline'} mr={2}>
              {approvalOverview.documentCount}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default ApprovalListItem;
