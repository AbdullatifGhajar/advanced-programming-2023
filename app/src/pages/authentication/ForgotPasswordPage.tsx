import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

import CenteredElement from '../../components/CenteredElement';

const ForgotPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });

    // TODO: complete this functionality
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
            />
          </Grid>
        </Grid>
        <CenteredElement>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%' }}
          >
            Reset
          </Button>
        </CenteredElement>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Back to Login Page
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ForgotPassword;
