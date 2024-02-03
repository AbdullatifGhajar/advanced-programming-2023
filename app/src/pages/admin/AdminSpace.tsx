import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';

const AdminSpace = () => {
  const theme = useTheme(); // Utilisation du thème pour accéder aux couleurs et aux paramètres de style

  const boxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default, // Utilisation de la couleur de fond par défaut du thème
    padding: '20px',
  };

  const displayColumn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    borderRadius: '8px',
    border: `2px solid ${theme.palette.divider}`, // Utilisation de la couleur du séparateur du thème
    backgroundColor: theme.palette.background.paper, // Utilisation de la couleur de fond des papiers du thème
    boxShadow: theme.shadows[4], // Utilisation des ombres définies dans le thème
  };

  const buttonStyle: React.CSSProperties = {
    width: '300px',
    borderRadius: '4px',
    textTransform: 'none', // Désactivation de la transformation de texte pour plus de naturel
    fontWeight: 'bold', // Mise en gras du texte pour une meilleure lisibilité
  };

  // Styles spécifiques pour rendre les boutons plus attractifs
  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  };

  const manageButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  };

  const validateButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  };

  return (
    <Box style={boxStyle}>
      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: theme.palette.text.primary,
        }}
      >
        Admin Space
      </Typography>

      <div style={displayColumn}>
        <Button style={addButtonStyle} variant="contained">
          Add a new internship
        </Button>
        <Button style={manageButtonStyle} variant="contained">
          Manage internships
        </Button>
        <Button style={deleteButtonStyle} variant="contained">
          Delete an internship
        </Button>
        <Button style={validateButtonStyle} variant="contained">
          Validate an internship
        </Button>
      </div>
    </Box>
  );
};

export default AdminSpace;
