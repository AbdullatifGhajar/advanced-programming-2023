import { Box, List } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import React from 'react';

import ApprovalOverview from '../../models/ApprovalOverview';
import ApprovalListItem from '../approvals/ApprovalListItem';

const TutorApprovalListPage = () => {
  const [approvalOverviews, setApprovalOverviews] = React.useState<
    ApprovalOverview[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:8081/approvals/42')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setApprovalOverviews(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Students Waiting for Approvals" />
      <List>
        {approvalOverviews.map((approvalOverview) => {
          return (
            <Box key={approvalOverview.user.id}>
              <ApprovalListItem approvalOverview={approvalOverview} />
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default TutorApprovalListPage;
