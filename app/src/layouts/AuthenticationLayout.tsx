import Box from '@mui/material/Box';
import React from 'react';

interface AuthenticationLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({
  children,
}) => {
  return (
    <Box
      display="flex"
      alignItems="left"
      flexDirection="row-reverse"
      sx={{ backgroundColor: '#1976d2', height: '100vh' }}
    >
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        sx={{
          padding: '2em',
          backgroundColor: 'white',
          width: '40%',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ margin: '0 2em' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticationLayout;
