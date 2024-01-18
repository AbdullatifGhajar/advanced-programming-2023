import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import AuthenticationLayout from '../../layouts/AuthenticationLayout';

const ForgotPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <AuthenticationLayout>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
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
        <Box display="flex"
          justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "50%" }}
          >
            Reset
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Back to Login Page
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthenticationLayout>
  );
}

export default ForgotPassword;