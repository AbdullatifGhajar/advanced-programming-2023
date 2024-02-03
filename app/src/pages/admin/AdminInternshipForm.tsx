import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from '@mui/material';

const AdminInternshipForm = () => {
  const [afterDeadline, setAfterDeadline] = React.useState(false);
  const [promotion, setPromotion] = React.useState('');

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setAfterDeadline(event.target.checked);
  };

  const handlePromotionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPromotion(event.target.value);
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add a new internship space
      </Typography>

      <TextField label="Internship Name" variant="outlined" fullWidth />
      <TextField label="Internship Subject" variant="outlined" fullWidth />
      <TextField
        label="Promotion"
        variant="outlined"
        select
        fullWidth
        value={promotion}
        onChange={handlePromotionChange}
      >
        {['2024', '2025', '2026', '2027', '2028'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField label="Class" variant="outlined" select fullWidth>
        {['L1', 'L2', 'L3', 'M1', 'M2'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Instructions for tutors"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        label="Instructions for students"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        label="Start submission date"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <TextField
        label="End submission date"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <TextField
        label="Deadline alert for the students"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={afterDeadline}
            onChange={handleCheckboxChange}
            name="afterDeadline"
            color="primary"
          />
        }
        label="Allow submission after deadline?"
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="outlined" color="primary">
          Save in draft
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AdminInternshipForm;
