import DocumentList from '../documents/list/DocumentList';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import React from 'react';
import DocumentOverview from '../../models/DocumentOverview';
import UserListItem from '../documents/list/UserListItem';

const TutorDocumentListPage = () => {
  const [userDocumentOverviewList, setUserDocumentOverviewList] =
    React.useState<Record<string, DocumentOverview[]>>({});

  React.useEffect(() => {
    fetch('http://localhost:8081/approvals/42')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setUserDocumentOverviewList(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  console.log(userDocumentOverviewList);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title="Documents to Approve" />
      {
        // iterate userDocumentOverviewList and for every key create a DocumentList
        Object.entries(userDocumentOverviewList).map(
          ([userId, documentOverviewList]) => {
            return (
              <Box key={userId}>
                <UserListItem user={documentOverviewList[0].user!} />
                <DocumentList documentOverviewList={documentOverviewList} />
              </Box>
            );
          },
        )
      }
    </Box>
  );
};

export default TutorDocumentListPage;
