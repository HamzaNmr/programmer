import React, { useContext, useState } from 'react';
import { Button,TextField, Grid, Typography,Container, Paper } from '@material-ui/core';
import useStyles from './styles';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import PhoneDisabledOutlinedIcon from '@mui/icons-material/PhoneDisabledOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

import { CopyToClipboard } from 'react-copy-to-clipboard';



import { SocketContext } from '../../SocketContext';


const Options = ({ children }) => {

  const classes = useStyles();

  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container className={classes.containerOption}>
      <Paper elevation={10} className={classes.paperOption}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Grid container className={classes.gridContainerOption}>

            <Grid item xs={12} md={12} className={classes.padding}>
              <Typography gutterBottom variant='h6'></Typography>
              <TextField variant='outlined' label='Name' value={name} onChange={(e) => setName(e.target.value)} className={classes.textField} fullWidth />
              {console.log(me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant='contained' fullWidth startIcon={<CopyAllOutlinedIcon fontSize='large'/>} style={{backgroundColor: '#26C0AB',  fontSize: "1.1rem", color:"#00494D", borderRadius: 7, fontWeight:"600", }}>
                  Copy Number
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={12} className={classes.padding}>
              <Typography gutterBottom variant='h6'>Call</Typography>
              <TextField variant='outlined' label='Number to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} className={classes.textField} fullWidth />
              {
                callAccepted && !callEnded ? (
                  <Button variant='contained' fullWidth color='secondary' startIcon={<PhoneDisabledOutlinedIcon fontSize='large'/>} className={`${classes.margin} ${classes.endCallButton}`} onClick={leaveCall}>
                    Hang up
                  </Button>
                ) : (
                  <Button variant='contained' fullWidth startIcon={<PhoneEnabledOutlinedIcon fontSize='large'/>} className={`${classes.margin} ${classes.callButton}`} onClick={() => {callUser(idToCall)}}>
                    Call
                  </Button>
                )
              }
            </Grid>

          </Grid>
        </form>
        {children}
      </Paper>
     
    </Container>
  )
}

export default Options;