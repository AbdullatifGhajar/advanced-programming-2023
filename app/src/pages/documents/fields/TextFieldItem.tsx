import React from 'react';
import { TextField as TextFieldComponent } from '@mui/material';

import { AnyField, TextField } from '../../../models/Field';
import FieldError from './FieldError';

type TextFieldProps = {
  textField: TextField;
  setField: React.Dispatch<React.SetStateAction<AnyField>>;
  setFieldErrors: React.Dispatch<React.SetStateAction<FieldError>>;
};

const TextFieldItem: React.FC<TextFieldProps> = ({
  textField,
  setField,
  setFieldErrors,
}) => {
  const validate = (value: string) => {
    let errorMessages: string[] = [];
    if (value === '') errorMessages.push('This field is required.');

    return errorMessages;
  };

  const handleFieldChange = (newValue: string) => {
    setFieldErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      updatedErrors[textField.id] = validate(newValue);
      return updatedErrors;
    });

    console.log('handleFieldChange', newValue);

    // change only the value of the field
    setField({ ...textField, value: newValue });
  };

  return (
    <TextFieldComponent
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
