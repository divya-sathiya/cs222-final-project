import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'white' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleMenu2}
            sx={{mr:2, p:0, color:"#12565a" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo height={50} />
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{color:"#12565a"}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}
                component={Link}
                to="/MyAccount">
                My account</MenuItem>
                <MenuItem onClick={handleClose}
                component={Link}
                to="/Login">
                Log Out</MenuItem>
              </Menu>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem 
                onClick={handleClose2}
                component={Link}
                to="/Deadline">
                Deadline
                </MenuItem>
                <MenuItem onClick={handleClose2}
                component={Link}
                to="/Dashboard"
                >Dashboard</MenuItem>
                <MenuItem onClick={handleClose2}
                component={Link}
                to="/Timer">
                Timer</MenuItem>
                <MenuItem onClick={handleClose2}
                component={Link}
                to="/Schedule">
                Schedule</MenuItem>
              </Menu>

            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}