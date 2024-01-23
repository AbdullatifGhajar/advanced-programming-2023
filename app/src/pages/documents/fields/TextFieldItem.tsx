import React from 'react';
import { TextField as TextFieldComponent } from '@mui/material';

import { AnyField, TextField } from '../../../models/Field';

type TextFieldProps = {
  textField: TextField;
  setFields: React.Dispatch<React.SetStateAction<AnyField[]>>;
};

const TextFieldItem: React.FC<TextFieldProps> = ({ textField, setFields }) => {
  const handleFieldChange = (newValue: string) => {
    setFields((prevFields) => {
      // Copy of previous fields
      const updatedFields = [...prevFields];

      // Find the right fields with the given id
      const index = updatedFields.findIndex((field) => field.id === textField.id);

      // fields is found so update it
      if (index !== -1) {
        updatedFields[index] = { ...updatedFields[index], value: newValue } as TextField;
      }
      return updatedFields;
    });
  };
  return (
    <TextFieldComponent
      key={textField.id}
      id={textField.id}
      name={textField.name}
      label={textField.name}
      defaultValue={textField.value}
      onChange={(event) => handleFieldChange(event.target.value)}
      fullWidth
      margin="normal"
    />
  );
};

export default TextFieldItem;
