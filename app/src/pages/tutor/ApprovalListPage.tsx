import { Box, List } from '@mui/material';
import React from 'react';
import PageTitle from '../../components/PageTitle';

import UserListItem from '../../components/users/UserListItem';
import ApprovalService from '../../services/ApprovalService';

import { StudentWithDocumentCount } from '../../models/User';

const ApprovalListPage = () => {
  const [documentsForStudents, setDocumentsForStudents] = React.useState<
    StudentWithDocumentCount[]
  >([]);

  const approvalService = new ApprovalService();

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    approvalService
      .fetchStudentsWithDocumentCount()
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
              key={documentsForStudent.student.id}
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
