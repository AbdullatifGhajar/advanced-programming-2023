import React from 'react';
import { TextField as TextFieldComponent } from '@mui/material';

import { TextField } from '../../../models/Field';

type TextFieldProps = {
  textField: TextField;
};

const TextFieldItem: React.FC<TextFieldProps> = ({ textField }) => {
  return (
    <TextFieldComponent
      label={textField.name}
      value={textField.value}
      fullWidth
      margin="normal"
    />
  );
};

export default TextFieldItem;
