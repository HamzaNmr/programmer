import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { AppBar, Avatar, Button, Toolbar, Typography, Badge, Box, Tooltip, Menu, IconButton, MenuItem} from '@material-ui/core';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import useStyles from "./styles";
import { styled } from '@mui/material/styles';


import { Link, useNavigate, useLocation } from "react-router-dom";

// import logo from "../../images/logo.png";

const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/auth', { replace: true });

        setUser(null);
    }
   
    useEffect(() => {
        // const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
          setAnchorEl(null);
        };

    console.log(user);
    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
        backgroundColor:"#0172ab",
        color:'white',
      },
    }));
    return(
        <AppBar className={classes.appBar} position='sticky' color='inherit'>

            <Toolbar className={classes.toolbar}>
                
        <div className={classes.brandContainer}>
            <Typography variant='h4'>LOGO</Typography>
          {/* <img className={classes.image} src={logo} alt="logo" height={30} /> */}
        </div>
        
        <Box>
          
          {user &&  <Box sx={{display:"flex", alignItems:"center", gap: "70px"}}>
  
          <Tooltip title="News"><BlurOnOutlinedIcon sx={{ fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
  
   <StyledBadge badgeContent={0}>
   <Tooltip title="Video call"><SlowMotionVideoOutlinedIcon sx={{fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
    </StyledBadge>
  
    <StyledBadge badgeContent={0}>
    <Tooltip title="Notfications"><CircleNotificationsOutlinedIcon sx={{fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
    </StyledBadge>
  
    </Box>}
          </Box>

        <Box sx={{display:"flex", alignItems:"center", gap: "20px"}}>
          
            {user ? (
                <div className={classes.profile}>

                    <Tooltip title="Open setting">
                    <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
                    <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                    </Avatar>
                </IconButton>
                    </Tooltip>
                    
                    <Menu className={classes.menu}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
        <Avatar  alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                    </Avatar>
         <Typography className={classes.userName}>{user.result.name}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon sx={{color:'red'}}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                
                </div>
            ) : (
                <Button component={Link} to="/auth" variant='contained' className={classes.signinButton}>Sign in</Button>
            )}
         

        </Box>

        </Toolbar>

    </AppBar>
    );
}

export default Navbar;