import React from 'react';
import { Checkbox, Box } from '@mui/material';

import { AnyField, CheckboxField } from '../../../models/Field';

type CheckboxFieldProps = {
  checkboxField: CheckboxField;
  setFields: React.Dispatch<React.SetStateAction<AnyField[]>>;
};

const CheckboxFieldItem: React.FC<CheckboxFieldProps> = ({
  checkboxField,
  setFields,
}) => {
  const handleFieldChange = (newValue: boolean) => {
    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) => {
        if (field.id === checkboxField.id) {
          return { ...field, value: newValue } as CheckboxField;
        }
        return field;
      });

      return updatedFields;
    });
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
        checked={checkboxField.value}
        onChange={(event) => handleFieldChange(event.target.checked)}
      />
    </Box>
  );
};

export default CheckboxFieldItem;
