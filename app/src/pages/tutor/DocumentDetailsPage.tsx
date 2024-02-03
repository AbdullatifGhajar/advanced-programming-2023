import React from 'react';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import Approval from '../../models/Approval';
import Document from '../../models/Document';
import ApprovalSection from '../approvals/ApprovalSection';
import DocumentDetails from '../documents/details/DocumentDetails';

const DocumentDetailsPage = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [document, setDocument] = useState<Document | null>(null);

  // Fetch form template from backend
  useEffect(() => {
    if (documentId == null) return;

    fetch(`http://localhost:8081/documents/${documentId}`)
      .then((response) => response.json())
      .then((data) => {
        setDocument(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [documentId]);

  // document is now defined for the rest of the component
  if (!document) return null;

  const setApproval = (index: number) => {
    const setter: React.Dispatch<React.SetStateAction<Approval>> = (
      newApproval,
    ) => {
      const newApprovals = [...document.approvals];
      newApprovals[index] = newApproval as Approval;
      setDocument({ ...document, approvals: newApprovals });
    };
    return setter;
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title={document.name} backButton={true} />
      <DocumentDetails document={document} setDocument={setDocument} />
      {document.approvals.map((approval, index) => {
        // TODO: only show sections for approvals that belongs to the tutor and are not yet approved
        return (
          <ApprovalSection
            approval={approval}
            setApproval={setApproval(index)}
            handleSubmit={() => {}} // TODO: save the approval to the backend
          />
        );
      })}
    </Box>
  );
};

export default DocumentDetailsPage;
