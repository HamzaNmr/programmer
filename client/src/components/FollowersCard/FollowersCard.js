import React from 'react';
import { Container, Button, Typography, Paper, Avatar, Grid, Grow } from '@material-ui/core';
import useStyles from './styles';

const FollowersCard = () => {
  return (
    
    <Paper style={{padding: '20px 30px', borderRadius: '15px', border: '3px solid #00494D', height: '370px',width:'273px', overflow: 'auto',}}>

        
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