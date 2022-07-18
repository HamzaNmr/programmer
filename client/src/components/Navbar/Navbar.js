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


import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';


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


    
    //     const [anchorEl, setAnchorEl] = useState(null);
    //     const open = Boolean(anchorEl);

    //     const handleClick = (event) => {
    //       setAnchorEl(event.currentTarget);
    //     };

    //     const handleClose = () => {
    //       setAnchorEl(null);
    //     };

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

    


    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl} onClick={toggleDrawer('right', true)}>
                        {user.result.name.charAt(0)}
                </Avatar>
                </ListItemIcon>
                <ListItemText>{user?.result?.name}</ListItemText>
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
        <List>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <GroupsOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Groups</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <LightModeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Theme</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText>Setting</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                 <ExitToAppIcon sx={{color:'red'}} />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
            </ListItem>
          
        </List>
      </Box>
    );

    return(
        <AppBar className={classes.appBar} position='sticky' color='inherit'>

            <Toolbar className={classes.toolbar}>
                
        <div className={classes.brandContainer}>
            <Typography variant='h4'
            style={{
              fontWeight: 900,
            }}
            >
              POGRAMMER
            </Typography>
          {/* <img className={classes.image} src={logo} alt="logo" height={30} /> */}
        </div>
        
        <Box>
          
          {user &&  <Box sx={{display:"flex", alignItems:"center", gap: "70px"}}>
  
          <Tooltip title="News"><BlurOnOutlinedIcon onClick={() => navigate('/news', {replace: true})} sx={{ fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
  
   <StyledBadge badgeContent={0} overlap="rectangular">
   <Tooltip title="Video call"><SlowMotionVideoOutlinedIcon onClick={() => navigate('/videoCall', {replace: true})} sx={{fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
    </StyledBadge>
  
    <StyledBadge badgeContent={0} overlap="rectangular">
    <Tooltip title="Notfications"><CircleNotificationsOutlinedIcon sx={{fontSize: "40px", color:"#eee", cursor: "pointer",}} className={classes.navBarItem} /></Tooltip>
    </StyledBadge>
  
    </Box>}
          </Box>

        <Box sx={{display:"flex", alignItems:"center", gap: "20px"}}>
          
            {user ? (
                <div className={classes.profile}>

                    <Tooltip title="Profile settings">
                    {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          > */}
                    <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl} onClick={toggleDrawer('right', true)}>
                        {user.result.name.charAt(0)}
                    </Avatar>
                {/* </IconButton> */}
                    </Tooltip>

          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
                    
                    {/* <Menu className={classes.menu}
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
      </Menu> */}
                
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