import { Box, List } from '@mui/material';
import React from 'react';
import PageTitle from '../../components/PageTitle';

import UserListItem from '../../components/users/UserListItem';
import User from '../../models/User';

interface DocumentsForStudent {
  student: User;
  documentCount: number;
}

const ApprovalListPage = () => {
  const [documentsForStudents, setDocumentsForStudents] = React.useState<
    DocumentsForStudent[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:8081/approvals/students')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setDocumentsForStudents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Students to Approve" />
      <List>
        {documentsForStudents.map((documentsForStudent) => {
          return (
            <UserListItem
              user={documentsForStudent.student}
              documentCount={documentsForStudent.documentCount}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default ApprovalListPage;
