import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Header from '../../components/Header';

const AdminSpace = () => {
  const boxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  };

  const displayColumn: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #ccc',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle: React.CSSProperties = {
    width: '300px',
    borderRadius: '4px',
  };

  return (
    <Box style={boxStyle}>
      <Typography
        variant="h4"
        style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}
      >
        Espace d'administration
      </Typography>

      <div style={displayColumn}>
        <Button variant="contained" style={buttonStyle} color="primary">
          Ajouter un nouveau stage
        </Button>
        <Button variant="contained" style={buttonStyle} color="primary">
          Gérer un stage
        </Button>
        <Button variant="contained" style={buttonStyle} color="error">
          Supprimer un stage
        </Button>
        <Button variant="contained" style={buttonStyle} color="success">
          Valider un stage
        </Button>
      </div>
    </Box>
  );
};

export default AdminSpace;

