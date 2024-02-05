import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import ApprovalSection from '../../components/approvals/ApprovalSection';
import DocumentDetails from '../../components/documents/details/DocumentDetails';
import Approval from '../../models/Approval';
import Document from '../../models/Document';
import ApprovalService from '../../services/ApprovalService';
import DocumentService from '../../services/DocumentService';

const DocumentDetailsPage = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [document, setDocument] = useState<Document | null>(null);

  const documentService = new DocumentService();
  const approvalService = new ApprovalService();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (documentId == null) return;

    documentService
      .fetchDocument(documentId)
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

  const handleSubmit = (index: number) => {
    return () => {
      approvalService.saveApproval(document.approvals[index]);
    };
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <PageTitle title={document.name} backButton={true} />
      <DocumentDetails document={document} setDocument={setDocument} />
      {document.approvals.map((approval, index) => {
        // TODO: only show sections for approvals that belongs to the tutor and are not yet approved
        return (
          <ApprovalSection
            key={approval.id}
            approval={approval}
            setApproval={setApproval(index)}
            handleSubmit={handleSubmit(index)}
          />
        );
      })}
    </Box>
  );
};

export default DocumentDetailsPage;
