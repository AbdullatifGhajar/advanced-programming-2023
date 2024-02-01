import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const ApprovalsButton = () => {
  const navigate = useNavigate();

  const goToApprovals = () => {
    navigate('/tutor/approvals');
  };

  return (
    <IconButton onClick={goToApprovals}>
      <AssignmentTurnedInIcon fontSize="large" style={{ color: 'white' }} />
    </IconButton>
  );
};

export default ApprovalsButton;
