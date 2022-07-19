import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Paper, Divider } from '@material-ui/core';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  if(!user){
    return <></>
  }

  return (
  <div>
    <Paper  onClick={handleOpen} style={{ cursor: 'pointer',padding: '10px 20px', borderRadius: '15px', display:'flex', alignItems: 'center', justifyContent:'center', backgroundColor: "#00494D",}}>
<AvatarGroup total={5}>
  <Avatar alt="Remy Sharp" src="https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png" />
  <Avatar alt="Travis Howard" src="https://www.php.net/images/meta-image.png" />
  <Avatar alt="Agnes Walker" src="https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png" />
  <Avatar alt="Trevor Henderson" src="https://oktob.io/storage/20309/top11.png" />
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
            
            <Typography variant='h5'>Etended Groups :</Typography>
            <br/>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}} onClick={() => navigate('/group', { replace: true})}>
            <Avatar alt="Trevor Henderson" src="https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>React group</Typography>
            <Typography variant='subtitle2'>front end group</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="https://www.php.net/images/meta-image.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>PHP guys</Typography>
            <Typography variant='subtitle2'>back end group</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>MERN</Typography>
            <Typography variant='subtitle2'>FULL STACK group</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="https://oktob.io/storage/20309/top11.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>Web developer</Typography>
            <Typography variant='subtitle2'>web group</Typography>
            </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>python</Typography>
            <Typography variant='subtitle2'>programming group</Typography>
            </div>
            </div>

            <Divider style={{marginBlock: '1rem'}}/>


             <Typography variant='h5'>Recommended Groups :</Typography>
            <br/>
          
            <div style={{display: 'flex', alignItems: 'center',  marginBottom: '1rem'}}>
            <Avatar alt="Trevor Henderson" src="https://dev.java/assets/images/java-logo-vert-blk.png" sx={{width: 50, height: 50, marginRight: '1.5rem'}}/>
            <div>
            <Typography variant='h6'>power of java</Typography>
            <Typography variant='subtitle2'>programming group</Typography>
            </div>
            </div>
          </Box>
        </Fade>
      </Modal>

</div>
  )
}

export default AvatarGroups;