import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    wrapper:{
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            
          },
    }
}));