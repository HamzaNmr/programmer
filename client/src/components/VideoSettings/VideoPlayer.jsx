import React, { useContext } from 'react';
import { Grid, Typography, Paper, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

import { SocketContext } from '../../SocketContext';


const VideoPlayer = () => {
 const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));


  
  
  return (
    <Grid  className={classes.gridContainer}>
      {
        stream && (
          <Paper className={ callAccepted && !callEnded ? classes.paperTwo : classes.paper }>

        <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom style={{display: 'flex', alignItems:'center',}}>
          <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl} style={{marginRight: '.7rem'}}>
                        {name.charAt(0)}
          </Avatar>
            {name || 'Name'}
          </Typography>
          <video playsInline muted ref={myVideo} autoPlay className={callAccepted && !callEnded ? classes.videoTwo : classes.video}/>
          
          
        </Grid>

      </Paper>
        )
      }
      
      {
        callAccepted && !callEnded && (

          
          <Paper className={classes.paperTwo}>

          <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom style={{display: 'flex', alignItems:'center',}}>
          <Avatar className={classes.avatar}  style={{marginRight: '.7rem'}}>
                        {call.name.charAt(0)}
          </Avatar>
            {call.name || 'Name'}
          </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.videoTwo}/>
          </Grid>
          
          </Paper>
        )
      }


    </Grid>
  )
}

export default VideoPlayer;