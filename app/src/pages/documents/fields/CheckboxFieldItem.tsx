import React from 'react';
import { Checkbox, Box } from '@mui/material';

import { AnyField, CheckboxField } from '../../../models/Field';

type CheckboxFieldProps = {
  checkboxField: CheckboxField;
  setField: React.Dispatch<React.SetStateAction<AnyField>>;
};

const CheckboxFieldItem: React.FC<CheckboxFieldProps> = ({
  checkboxField,
  setField,
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
      />
    </Box>
  );
};

export default CheckboxFieldItem;
