import { AccessTimeFilled, Cancel, CheckCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import React from 'react';

export interface ApprovalStatusIconProps {
  isGiven: boolean | null;
}

const ApprovalStatusIcon: React.FC<ApprovalStatusIconProps> = ({ isGiven }) => {
  const [iconClass, color] = isGiven
    ? [CheckCircle, green]
    : isGiven === null
      ? [AccessTimeFilled, yellow]
      : [Cancel, red];

  return (
    <IconButton sx={{ color: color[500] }}>
      {React.createElement(iconClass, { sx: { width: '2em', height: '2em' } })}
    </IconButton>
  );
};

export default ApprovalStatusIcon;
