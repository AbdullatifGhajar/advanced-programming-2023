import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AuthenticationLayout from '../../layouts/AuthenticationLayout';

import CenteredElement from '../../components/CenteredElement';
import AuthenticationService from '../../services/AuthenticationService';

const LoginPage = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const authenticationService = new AuthenticationService();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      console.error('Please fill in all fields');
      return;
    }

    authenticationService
      .login(email, password)
      .then(() => {
        navigate('/');
      }) // TODO: navigate to history location or home
      .catch((error) => {
        console.error('Error during API request:', error);
      });
  };

  return (
    <AuthenticationLayout>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <CenteredElement>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%' }}
          >
            Login
          </Button>
        </CenteredElement>

        <Grid container justifyContent="flex-end">
          <Grid item sx={{ marginLeft: '0.5em' }}>
            <Link href="/forgot-password" variant="body2">
              Reset password
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: '0.5em' }}>
            <Link href="/register" variant="body2">
              Register
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthenticationLayout>
  );
};

export default LoginPage;
