import React from 'react';
import FileBase from 'react-file-base64';
import TextareaAutosize from '@mui/material/TextareaAutosize';


import { Container, Button, Typography, Paper, Avatar, Grid, Grow } from '@material-ui/core';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HardwareOutlinedIcon from '@mui/icons-material/HardwareOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import useStyles from './styles';

import All from './All';
import Input from '../Auth/Input';

import bgImg from '../../images/news.jpg';



const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 'auto',
  backgroundColor: '#C5E4E7',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap:2,
};

const styleReport = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 'auto',
  backgroundColor: '#C5E4E7',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap:2,
};

 const Profile = () => {

  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));

      
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openReport, setOpenReport] = React.useState(false);
  const handleOpenReport = () => setOpenReport(true);
  const handleCloseReport = () => setOpenReport(false);



  return (
    <Grow in>
    <Container style={{marginTop: "90px", color: '#00494D',}}>

      <Grid container>
        <Grid item xs={12} md={12}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZtv3tZBDlzJJ7U6Oon-jgHDNB3UqkRfmsA&usqp=CAU' alt="background image" style={{width: '100%', height:'230px', borderRadius:'15px', objectFit:'cover',}}/>
        </Grid>
        <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl} classeName={classes.avatar}>
                        {user.result.name.charAt(0)}
        </Avatar>
        <Typography variant='h5' className={classes.overlayName}>
          Hamza Nemer
         <Button variant='contained' className={classes.FollowButton} endIcon={<AddTaskOutlinedIcon/>}>Follow</Button>
         <Button variant='contained' color='secondary' endIcon={<ReportGmailerrorredIcon/>} style={{marginInline:'1rem'}} onClick={handleOpenReport}>report</Button>

         <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openReport}
        onClose={handleCloseReport}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openReport}>
          <Box sx={styleReport}>
            <Typography variant='subtitle1'>
              Please explain why do you want report this user, and make your description clear and indicated for a specific reason.
            </Typography>
            <TextareaAutosize
               aria-label="minimum height"
                minRows={10}
               placeholder="Description"
                style={{ width: '93%', border: '2px solid rgba(230,0,0,0.5)', borderRadius:7, padding:'20px 30px'}}
                />
                <div style={{width:"100%", display: "flex", justifyContent: 'flex-end', marginTop: '2rem'}}>
                  <Button variant='contained' color="secondary" startIcon={<ReportGmailerrorredIcon/>}>submit</Button>
                </div>
          </Box>
        </Fade>
          </Modal>

         </Typography>

      <Grid item xs={12} sm={12}>
        <Paper elevation={0} className={classes.info}>


          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
             <Typography variant='h5' style={{marginBottom: '1rem',}}>user's information</Typography>
             <Button variant='contained' className={classes.EditButton} startIcon={<ModeEditOutlineOutlinedIcon/>} onClick={handleOpen}>Edit profile</Button>

             <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <Typography variant='h5'>
              Edit your information
            </Typography>
            
         <div style={{display: 'flex', gap:2}}>
          <Input name="firstName" label="First Name" type="text" />
          <Input name="lasttName" label="last Name" type="text" />
         </div>

          <div style={{display: 'flex',  gap:2}}>
          <Input name="gender" label="Gender" type="text" half/>
          <Input name="age" label="Age" type="text" />
          <Input name="experience" label="Experience" type="text" half/>
          </div>

          <div style={{display: 'flex',  gap:2}}>
          <Input name="major" label="Major" type="text" half/>
          <Input name="skills" label="Skills" type="text" half/>
          </div>

          <div style={{display: 'flex',  gap:2}}>
          <Input name="bio" label="Bio" type="text" />
          </div>

          <div style={{display: 'flex', gap:2}}>
            <Typography variant='subtile1' style={{marginRight: '1rem',display: 'flex', alignItems:'center' }}>
              Picture Profile : 
            </Typography>
            
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={ {} }
                    />
            <Typography variant='subtile1' style={{marginRight: '1rem',display: 'flex', alignItems:'center' }}> 
              Backgound Image : 
            </Typography>
            
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={ {} }
                    />
                </div>

                <div style={{width:"100%", display: "flex", justifyContent: 'flex-end', marginTop: '2rem'}}>
                  <Button variant='contained' className={classes.EditButton} startIcon={<SaveAsOutlinedIcon/>}>Save changes</Button>
                </div>

          </Box>
        </Fade>
    </Modal>


          </div>


          
          <Typography variant='subtitle1' style={{display: 'flex', alignItems: 'center', gap: 3,marginBottom: '1rem'}}><InsertInvitationOutlinedIcon/> Age: 22</Typography>
          <Typography variant='subtitle1'style={{display: 'flex', alignItems: 'center', gap: 3,marginBottom: '1rem'}}><WcOutlinedIcon/> Gender: Male</Typography>
          <Typography variant='subtitle1'style={{display: 'flex', alignItems: 'center', gap: 3,marginBottom: '1rem'}}><WorkOutlineOutlinedIcon/> Major: Web developer</Typography>
          <Typography variant='subtitle1'style={{display: 'flex', alignItems: 'center', gap: 3,marginBottom: '1rem'}}><HardwareOutlinedIcon/> Experience: 1 year</Typography>
          <Typography variant='subtitle1'style={{display: 'flex', alignItems: 'center', gap: 3,marginBottom: '1rem'}}><BallotOutlinedIcon/> Skills: React, js</Typography>
          <Typography variant='subtitle1'style={{display: 'flex', alignItems: 'center', gap: 3,}}><BookmarkBorderOutlinedIcon/> Bio: I'm a web developer with some experience in front-end and back-end. i work in React you can say i'am a full stack web developer (MERN)</Typography>

        </Paper>

      </Grid>

      <Grid item xs={12} sm={12} style={{display: 'flex',}}>
          <All />
      </Grid> 


      </Grid>
  
     

       

    </Container>
    </Grow>
  )
}

export default Profile;