import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {

      const [menuOptions, setMenuOptions] = React.useState<null | HTMLElement>(null);
      const open = Boolean(menuOptions);
      const navigate = useNavigate();
      const userName = "User1"
        
      const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuOptions(event.currentTarget);
      };
    
      const handleClose = () => {
        setMenuOptions(null);
      };

      const goToHome = () => {
        navigate("/document/1");
      }

      return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    {/* HOME */}
                    <IconButton 
                    onClick={goToHome}><HomeIcon fontSize="large" style={{color:'white'}}/></IconButton>
                    {/* USER */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                        <Button 
                        variant="outlined"
                        size="large"
                        aria-label="account of current user"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                            <AccountCircle/>
                            <Typography sx={{ml:2}}>Hi, {userName}! </Typography>
                        </Button>
                        {/* MENU DEROULANT */}
                        <Menu
                        id="menu-appbar"
                        anchorEl={menuOptions}
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
                        }}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Log out</MenuItem>
                        </Menu> 
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
      );
}

export default Header;
