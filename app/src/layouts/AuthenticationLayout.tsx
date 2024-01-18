import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const defaultTheme = createTheme();

interface AuthenticationLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box display="flex" alignItems="left" flexDirection="row-reverse" sx={{ backgroundColor: "#1976d2", height: "100vh" }}>
        <Box
          component="main"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          sx={{
            padding: "2em",
            backgroundColor: "white",
            width: "40%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ margin: "0 2em" }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AuthenticationLayout;
