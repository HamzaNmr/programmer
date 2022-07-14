import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Paper } from '@material-ui/core';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  backgroundColor: '#C5E4E7',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
};


const AvatarGroups = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(!user){
    return <></>
  }

  return (
  <div>
    <Paper  onClick={handleOpen} style={{ cursor: 'pointer',padding: '10px 20px', borderRadius: '15px', display:'flex', alignItems: 'center', justifyContent:'center', backgroundColor: "#00494D",}}>
<AvatarGroup total={24}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
    </Paper>

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
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

</div>
  )
}

export default AvatarGroups;