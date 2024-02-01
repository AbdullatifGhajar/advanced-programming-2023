import { Button, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

import { AnyField, FileField, File as FileModel } from '../../../models/Field';

type FileFieldProps = {
  fileField: FileField;
  setField: React.Dispatch<React.SetStateAction<AnyField>>;
};

const FileFieldItem: React.FC<FileFieldProps> = ({ fileField, setField }) => {
  const filename = fileField.file?.name;

  const uploadFile = async (file: File): Promise<FileModel> => {
    const formData = new FormData();
    formData.append('file', file);

    return fetch('http://localhost:8081/files/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        return data as FileModel;
      });
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawFile = event.target.files?.[0];
    if (!rawFile) return;

    uploadFile(rawFile)
      .then((file) => {
        setField({ ...fileField, file });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
            <input
              type="file"
              hidden
              multiple={false}
              onChange={handleFieldChange}
            />
          </Button>
        ),
      }}
    />
  );
};

export default FileFieldItem;
