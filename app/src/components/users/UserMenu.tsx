import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AuthenticationService from '../../services/AuthenticationService';

interface UserMenuProps {
  username: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ username }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menu);

  const authenticationService = new AuthenticationService();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const handleLoggedOut = () => {
    authenticationService.logout();
    navigate('/');
  };

  const handleClickedOnProfile = () => {
    navigate('/profile');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button
        variant="outlined"
        size="large"
        aria-label="account of current user"
        aria-controls={isMenuOpen ? 'basic-menu' : undefined}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
        <Typography sx={{ ml: 2 }}>Hi, {username}! </Typography>
      </Button>

      {/* USER OPTION MENU */}
      <Menu
        id="menu-appbar"
        anchorEl={menu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickedOnProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLoggedOut}>Log out</MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
