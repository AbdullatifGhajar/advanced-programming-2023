import React from 'react';
import { Checkbox, Box } from '@mui/material';

import { CheckboxField } from '../../../models/Field';

type CheckboxFieldProps = {
  checkboxField: CheckboxField;
};

const CheckboxFieldItem: React.FC<CheckboxFieldProps> = ({ checkboxField }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="normal"
    >
      {checkboxField.name}
      <Checkbox checked={checkboxField.value} />
    </Box>
  );
};

export default CheckboxFieldItem;
