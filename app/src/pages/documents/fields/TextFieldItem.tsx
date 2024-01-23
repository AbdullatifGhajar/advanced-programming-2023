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
      const updatedFields = prevFields.map((field) => {
        if (field.id === textField.id) {
          return { ...field, value: newValue } as TextField;
        }
        return field;
      });

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
