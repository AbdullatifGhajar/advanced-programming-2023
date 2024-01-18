import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AuthenticationPage from './AuthenticationPage';


export default function LoginPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      console.error("Veuillez remplir tous les champs");
      return;
    }

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log("Connexion réussie !");
      } else {
        console.error("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  };

  return (
    <AuthenticationPage>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
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
        <Box display="flex"
          justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "50%" }}
          >
            Login
          </Button>
        </Box>

        <Grid container justifyContent="flex-end">
          <Grid item sx={{marginLeft: "0.5em"}}>
            <Link href="/forgot-password" variant="body2">
              Reset password
            </Link>
          </Grid>
          <Grid item sx={{marginLeft: "0.5em"}}>
            <Link href="/register" variant="body2">
              Register
            </Link>
          </Grid>
        </Grid>
      </Box>

    </AuthenticationPage>
  );
}
