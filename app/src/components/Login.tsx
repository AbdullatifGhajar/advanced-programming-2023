import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { useHistory } from "react-router-dom"; // Ajout de cette ligne


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {
  //  const history = useHistory(); // Initialisation du hook useHistory
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Vérifier chaque champ
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      console.error("Veuillez remplir tous les champs");
      return;
    }

    // Créer l'objet de données à envoyer
    const loginData = {
      email,
      password,
    };

    try {
      // Envoyer la requête POST à l'API /login
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Gérer la réponse de l'API
      if (response.ok) {
        console.log("Connexion réussie !");
        // Rediriger vers la nouvelle page après la connexion réussie
        //history.push("/nouvelle-page");
      } else {
        console.error("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se connecter
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
              label="Adresse e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Vous n'avez pas de compte ? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
