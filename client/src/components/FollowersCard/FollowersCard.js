import React from 'react';
import { Container, Button, Typography, Paper, Avatar, Grid, Grow } from '@material-ui/core';
import useStyles from './styles';
import { ClassNames } from '@emotion/react';

const FollowersCard = () => {
  const classes = useStyles();
  return (
    
    <Paper className={classes.paper}>

        <div style={{width: '96.5%', display: 'flex', justifyContent: 'center', backgroundColor: '#C5E4E7',padding: '10px 0', borderRadius: '15px', border: '3px solid #00494D', marginBottom: '1.5rem',}}>
        <Typography variant='h6'>Followers 20</Typography>
        </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography >Trevor Henderson</Typography>
            </div>
            </div>

    </Paper>
  )
}

export default FollowersCard;