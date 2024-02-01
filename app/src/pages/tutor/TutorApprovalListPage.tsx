import { Box, List } from '@mui/material';
import React from 'react';
import PageTitle from '../../components/PageTitle';

import User from '../../models/User';
import UserListItem from '../users/UserListItem';

interface UserApprovalOverview {
  user: User;
  documentCount: number;
}

const TutorApprovalListPage = () => {
  const [userApprovalOverviews, setUserApprovalOverviews] = React.useState<
    UserApprovalOverview[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:8081/approvals/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setUserApprovalOverviews(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Students to Approve" />
      <List>
        {userApprovalOverviews.map((userApprovalOverview) => {
          return (
            <UserListItem
              user={userApprovalOverview.user}
              documentCount={userApprovalOverview.documentCount}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default TutorApprovalListPage;
