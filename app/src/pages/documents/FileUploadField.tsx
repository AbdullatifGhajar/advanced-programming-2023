import { useState } from 'react';
import { TextField, Button } from '@mui/material';

type FileUploadFieldProps = {
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
};

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  const [fileName, setFileName] = useState<string | null>(
    value ? value.name : null,
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);
    setFileName(file ? file.name : null);
  };

  return (
    <div>
      <TextField
        label={label}
        value={fileName || ''}
        disabled
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <Button component="label" variant="contained" color="primary">
              {fileName ? 'Change' : 'Upload'}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          ),
        }}
      />
    </div>
  );
};

export default FileUploadField;
