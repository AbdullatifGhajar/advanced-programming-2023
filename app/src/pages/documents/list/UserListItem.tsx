import React from 'react';
import { ListItem, Card, CardContent, Box } from '@mui/material';
import User from '../../../models/User';

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <ListItem key={user.id}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Box
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Box fontWeight={'bold'} fontSize={24} display={'inline'} mr={1}>
              {user.name}
            </Box>
            <Box fontWeight={'normal'} fontSize={14} display={'inline'} mr={1}>
              {user.email}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default UserListItem;
