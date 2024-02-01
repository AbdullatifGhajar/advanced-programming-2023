import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserListItem from '../users/UserListItem';

import UserApprovals from '../../models/UserApprovals';
import DocumentListItem from '../documents/list/DocumentListItem';

import Document from '../../models/Document';

const TutorStudentDetailsPage = () => {
  const { id: userId } = useParams<{ id: string }>();
  const [userApprovals, setUserApprovals] = useState<UserApprovals | null>(
    null,
  );

  useEffect(() => {
    if (userId == null) return;

    fetch(`http://localhost:8081/approvals/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserApprovals(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId]);

  // userApprovals is now defined for the rest of the component
  if (!userApprovals) return null;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle
        title={`Documents for ${userApprovals.user.name}`}
        backButton={true}
      />
      <UserListItem
        user={userApprovals.user}
        documentCount={userApprovals.documents.length}
      />
      {userApprovals.documents.map((document: Document) => {
        return (
          <DocumentListItem documentOverview={document} onClick={() => { }} />
        );
      })}
    </Box>
  );
};

export default TutorStudentDetailsPage;
