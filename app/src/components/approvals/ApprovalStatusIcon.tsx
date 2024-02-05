import { AccessTimeFilled, Cancel, CheckCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import React from 'react';

export interface ApprovalStatusIconProps {
  isGiven: boolean | null;
}

const ApprovalStatusIcon: React.FC<ApprovalStatusIconProps> = ({ isGiven }) => {
  let iconClass;
  let color;

  if (isGiven) {
    iconClass = CheckCircle;
    color = green;
  } else if (isGiven === null) {
    iconClass = AccessTimeFilled;
    color = yellow;
  } else {
    iconClass = Cancel;
    color = red;
  }

  return (
    <IconButton sx={{ color: color[500] }}>
      {React.createElement(iconClass, { sx: { width: '2em', height: '2em' } })}
    </IconButton>
  );
};

export default ApprovalStatusIcon;
