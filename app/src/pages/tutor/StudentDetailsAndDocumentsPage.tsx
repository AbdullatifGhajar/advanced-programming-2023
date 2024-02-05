import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserListItem from '../../components/users/UserListItem';

import DocumentListItem from '../../components/documents/list/DocumentListItem';

import Document from '../../models/Document';
import User from '../../models/User';
import ApprovalService from '../../services/ApprovalService';

interface StudentDetailsAndDocuments {
  student: User;
  documents: Document[];
}

const StudentDetailsAndDocumentsPage = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [detailsAndDocuments, setDetailsAndDocuments] =
    useState<StudentDetailsAndDocuments | null>(null);

  const approvalService = new ApprovalService();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (studentId == null) return;

    approvalService
      .fetchStudentDetailsAndDocuments(studentId)
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
        return (
          <DocumentListItem key={document.id} documentOverview={document} />
        );
      })}
    </Box>
  );
};

export default StudentDetailsAndDocumentsPage;
