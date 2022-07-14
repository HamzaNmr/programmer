import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Paper } from "@material-ui/core";
import { Avatar, CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";

import useStyles from "./styles";

const ProfileCard = () => {
    
  const classes = useStyles();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  const navigateToProfile = () => {
    navigate('/profile', {replace: true});
  }

  if(!user?.result?.name){
    return (
     <></>
    )
}

    return (
        
        <Card  className={classes.profileCard} onClick={navigateToProfile}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
          alt="background image"
        />
        <div className={classes.overlay}>
        <Avatar  alt={user?.result?.name} src={user?.result?.imageUrl} sx={{ width: 70, height: 70, boxShadow: '0px 12px 60px -9px rgba(0,0,0,0.7)',}}>
                        {user.result.name.charAt(0)}
                    </Avatar>
        </div>
        <CardContent className={classes.text}>
        
          <Typography gutterBottom component="p" className={classes.userName} >
            { user ? (user?.result?.name) : ('Guest')}
          </Typography>
        
          <Box sx={{marginTop: "15px", color: "#00494D",}}>
          <Grid container spacing={2} alignItems='stretch'>
            <Grid item lg={6}>
            <Typography variant="body2" className={classes.follow} >
            FOLLOWERS 
            <br/>
            2
           </Typography>
            </Grid>
            <Grid item lg={6}>
            <Typography variant="body2"  className={classes.follow}>
            FOLLOWING
            <br/>
            2
            </Typography>
            </Grid>
          </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  
    );
}

export default ProfileCard;