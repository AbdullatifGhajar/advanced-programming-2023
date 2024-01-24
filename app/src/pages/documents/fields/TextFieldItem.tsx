import React from 'react';
import { TextField as TextFieldComponent } from '@mui/material';

import { AnyField, ITextField } from '../../../models/Field';
import IFieldError from './FieldError';

type TextFieldProps = {
  textField: ITextField;
  setFields: React.Dispatch<React.SetStateAction<AnyField[]>>;
  setFieldErrors: React.Dispatch<React.SetStateAction<IFieldError>>;
};

const TextFieldItem: React.FC<TextFieldProps> = ({
  textField,
  setFields,
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

    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) => {
        if (field.id === textField.id) {
          return { ...field, value: newValue } as ITextField;
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
