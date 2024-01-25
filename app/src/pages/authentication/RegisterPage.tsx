import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AuthenticationLayout from '../../layouts/AuthenticationLayout';
import CenteredElement from '../../components/CenteredElement';
import { apiAuth } from '../../services/AxiosService';

const RegisterPage = () => {
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setNameError('');
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (!name) {
      setNameError('Please enter your name');
      hasError = true;
    }

    if (!email) {
      setEmailError('Please enter your email address');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const registrationData = {
      name,
      email,
      password,
    };

    apiAuth.post('/users/register', JSON.stringify(registrationData))
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error('Error during registration');
        }
      })
      .then((jwt) => {
        localStorage.setItem('token', jwt);
        console.log('Registration successful!');
        navigate('/');
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  };

  return (
    <AuthenticationLayout>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              error={Boolean(nameError)}
              helperText={nameError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={Boolean(emailError)}
              helperText={emailError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
          </Grid>
        </Grid>
        <CenteredElement>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%' }}
          >
            Register
          </Button>
        </CenteredElement>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthenticationLayout>
  );
};

export default RegisterPage;
