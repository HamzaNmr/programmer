import React, {StrictMode} from 'react';


import { Typography } from '@material-ui/core';
import useStyles from './styles';



import VideoPlayer from '../VideoSettings/VideoPlayer';
import Notifications from '../VideoSettings/Notifications';
import Options from '../VideoSettings/Options';


import { ContextProvider } from "../../SocketContext";


const VideoCall = () => {

  const classes = useStyles();

  return (
   <StrictMode>
    <ContextProvider>
    <div style={{marginTop: '70px',}} className={classes.wrapper}>
    
    
    <Options>
      <Notifications />
    </Options>
  

   
    <VideoPlayer />
    

    </div>
    </ContextProvider>
    </StrictMode>
  )
}

export default VideoCall;