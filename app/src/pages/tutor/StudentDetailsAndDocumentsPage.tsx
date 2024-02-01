import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserListItem from '../users/UserListItem';

import DocumentListItem from '../documents/list/DocumentListItem';

import Document from '../../models/Document';
import User from '../../models/User';

interface StudentDetailsAndDocuments {
  student: User;
  documents: Document[];
}

const StudentDetailsAndDocumentsPage = () => {
  const { studentId: studentId } = useParams<{ studentId: string }>();
  const [detailsAndDocuments, setDetailsAndDocuments] =
    useState<StudentDetailsAndDocuments | null>(null);

  useEffect(() => {
    if (studentId == null) return;

    fetch(`http://localhost:8081/approvals/students/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setDetailsAndDocuments(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [studentId]);

  // studentDocuments are now defined for the rest of the component
  if (!detailsAndDocuments) return null;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle
        title={`Documents for ${detailsAndDocuments.student.name}`}
        backButton={true}
      />
      <UserListItem user={detailsAndDocuments.student} />
      {detailsAndDocuments.documents.map((document: Document) => {
        return <DocumentListItem documentOverview={document} />;
      })}
    </Box>
  );
};

export default StudentDetailsAndDocumentsPage;
