import { Box } from '@mui/material';
import React from 'react';

import User from '../models/User';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from './UserMenu';
import LoginButton from './buttons/LoginButton';

interface HeaderProps {
  user: User | undefined;
  navigationButtons?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  user,
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
          {user ? <UserMenu username={user.name} /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
