import { Box, Card, CardContent, ListItem, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';

interface UserListItemProps {
  user: User;
  documentCount?: number;
}

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  documentCount: count,
}) => {
  const navigate = useNavigate();

  return (
    <ListItem key={user.id}>
      <Card
        onClick={() => navigate(String(user.id))}
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
                {user.name}
              </Box>
              <Box
                fontWeight={'normal'}
                fontSize={14}
                display={'inline'}
                mr={1}
              >
                {user.email}
              </Box>
            </Box>
            <Box fontWeight={'bold'} fontSize={32} display={'inline'} mr={2}>
              <Tooltip title={`Number of documents to approve`}>
                <span>{count}</span>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default UserListItem;
