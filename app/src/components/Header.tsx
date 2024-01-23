import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AuthenticationHandler from '../services/AuthenticationHandler';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const [userOptionMenu, setMenuOptions] = React.useState<null | HTMLElement>(
    null,
  );
  const open = Boolean(userOptionMenu);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOptions(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOptions(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToDocuments = () => {
    navigate('/documents');
  };

  const handleLoggedOut = () => {
    const authenticationHandler = new AuthenticationHandler(navigate);
    authenticationHandler.logout();
  };

  const handleClickedOnProfile = () => {
    navigate('/profile');
  };

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
          <Box>
            {/* HOME BUTTON */}
            <IconButton onClick={goToHome}>
              <HomeIcon fontSize="large" style={{ color: 'white' }} />
            </IconButton>
            {/* DOCUMENTS BUTTON */}
            <IconButton onClick={goToDocuments}>
              <ArticleIcon fontSize="large" style={{ color: 'white' }} />
            </IconButton>
          </Box>

          {/* USER */}
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Button
              variant="outlined"
              size="large"
              aria-label="account of current user"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
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
              anchorEl={userOptionMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClickedOnProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLoggedOut}>Log out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
