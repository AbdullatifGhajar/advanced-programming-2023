import { Box } from '@mui/material';
import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from './UserMenu';

interface HeaderProps {
  username: string;
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

          {/* USER */}
          <UserMenu username={username} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
