import React, {useContext} from 'react';
import { Button } from '@material-ui/core';
import './styles.css';

import { SocketContext } from '../../SocketContext';

import useStyles from './styles';
import PhoneEnabledOutlined from '@mui/icons-material/PhoneEnabledOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';


const Notifications = () => {

  const classes = useStyles();

  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
    {
        call.isReceivedCall && !callAccepted && (
          <div style={{display: 'flex', flexDirection: 'column', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
            <h4>{call.name}</h4>
            <div class="call-animation">
            <Button variant='contained' fullWidth onClick={answerCall} className={classes.answerButton}>
            <PhoneInTalkOutlinedIcon fontSize='large' />
            </Button>
            </div>
          </div>
        )
    }
    </>
  )
}
export default Notifications;