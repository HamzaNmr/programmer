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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZtv3tZBDlzJJ7U6Oon-jgHDNB3UqkRfmsA&usqp=CAU"
          alt="background image"
        />
        <div className={classes.overlay}>
        <Avatar  alt={user?.result?.name} src={user?.result?.imageUrl} sx={{ width: 70, height: 70, border: '5px solid white',}}>
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
            0
           </Typography>
            </Grid>
            <Grid item lg={6}>
            <Typography variant="body2"  className={classes.follow}>
            FOLLOWING
            <br/>
            0
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