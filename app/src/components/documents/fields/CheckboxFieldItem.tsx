import { Box, Checkbox } from '@mui/material';
import React from 'react';

import { AnyField, CheckboxField } from '../../../models/Field';

type CheckboxFieldProps = {
  checkboxField: CheckboxField;
  setField: React.Dispatch<React.SetStateAction<AnyField>>;
  disabled?: boolean;
};

const CheckboxFieldItem: React.FC<CheckboxFieldProps> = ({
  checkboxField,
  setField,
  disabled = false,
}) => {
  const handleFieldChange = (newIsChecked: boolean) => {
    setField({ ...checkboxField, isChecked: newIsChecked });
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="normal"
    >
      {checkboxField.name}
      <Checkbox
        checked={checkboxField.isChecked}
        onChange={(event) => handleFieldChange(event.target.checked)}
        disabled={disabled}
      />
    </Box>
  );
};

export default CheckboxFieldItem;
