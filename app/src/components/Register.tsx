import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RegisterPage() {
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Vérifier chaque champ
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Réinitialiser les messages d'erreur
    setNameError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    // Vérifier le champ du nom
    if (!name) {
      setNameError("Veuillez saisir votre nom");
      hasError = true;
    }

    // Vérifier le champ d'email
    if (!email) {
      setEmailError("Veuillez saisir votre adresse e-mail");
      hasError = true;
    }

    // Vérifier le champ de mot de passe
    if (!password) {
      setPasswordError("Veuillez saisir votre mot de passe");
      hasError = true;
    }

    if (hasError) {
      // Il y a des erreurs, ne pas continuer avec la soumission
      return;
    }

    // Créer l'objet de données à envoyer
    const registrationData = {
      name,
      email,
      password,
    };

    try {
      // Envoyer la requête POST à l'API /register
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      // Gérer la réponse de l'API
      if (response.ok) {
        console.log("Enregistrement réussi !");
        // Rediriger vers une nouvelle page après l'enregistrement réussi
        // Vous pouvez remplacer "/nouvelle-page" par le chemin de la nouvelle page
        window.location.href = "/";
      } else {
        console.error("Erreur lors de l'enregistrement");
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
            S'inscrire
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
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom"
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
                  label="Adresse e-mail"
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
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              S'inscrire
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Vous avez déjà un compte ? Connectez-vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
