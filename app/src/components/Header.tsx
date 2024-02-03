import { Box } from '@mui/material';
import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from './UserMenu';
import LoginButton from './buttons/LoginButton';

interface HeaderProps {
  username: string | null;
  navigationButtons?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  username,
  navigationButtons: actionButtons,
}) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* NAVIGATION BUTTONS */}
          <Box>{actionButtons}</Box>

          {/* LOGIN BUTTON OR USER MENU */}
          {username ? <UserMenu username={username} /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
