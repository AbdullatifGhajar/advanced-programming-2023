import React from 'react';
import { TextField, Button } from '@mui/material';

import { FileField } from '../../../models/Field';

type FileFieldProps = {
  fileField: FileField;
};

const FileFieldItem: React.FC<FileFieldProps> = ({ fileField }) => {
  const filename = fileField.file?.name;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <TextField
      label={fileField.name}
      value={filename || ''}
      disabled
      fullWidth
      margin="normal"
      InputProps={{
        endAdornment: (
          <Button component="label" variant="contained" color="primary">
            {filename ? 'Change' : 'Upload'}
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        ),
      }}
    />
  );
};

export default FileFieldItem;
