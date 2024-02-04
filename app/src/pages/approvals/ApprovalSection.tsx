import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
} from '@mui/material';
import React from 'react';

import CenteredElement from '../../components/CenteredElement';
import Approval from '../../models/Approval';

interface ApprovalSectionProps {
  approval: Approval;
  setApproval: React.Dispatch<React.SetStateAction<Approval>>;
  handleSubmit: () => void;
}

const ApprovalSection: React.FC<ApprovalSectionProps> = ({
  approval,
  setApproval,
  handleSubmit,
}) => {
  const handleCheckboxChange = (checked: boolean) => {
    setApproval({ ...approval, isGiven: checked });
  };

  const handleCommentChange = (text: string) => {
    setApproval({ ...approval, comment: text });
  };

  return (
    <Box
      flexDirection={'column'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <CenteredElement>
        <h2>Approval section</h2>
      </CenteredElement>
      <form onSubmit={handleSubmit}>
        <Box
          flexDirection={'column'}
          display={'flex'}
          justifyContent={'space-between'}
          sx={{ marginBottom: '2em' }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={approval.isGiven === true}
                onChange={(event) => handleCheckboxChange(event.target.checked)}
              />
            }
            label="Approved"
          />
          <TextareaAutosize
            value={approval.comment}
            onChange={(event) => {
              handleCommentChange(event.target.value);
            }}
            placeholder="Add a comment..."
            minRows={4}
          />
        </Box>

        <CenteredElement>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Save
          </Button>
        </CenteredElement>
      </form>
    </Box>
  );
};

export default ApprovalSection;
