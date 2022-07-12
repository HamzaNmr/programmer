import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    borderRadius: 15,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    // backgroundColor: "#252830",
    // color: "#eee",
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0172ab",
    color: "#eee",
    fontSize:"1.2rem",
    transition: ".5s ease",
    backgroundColor:"#26C0AB",
    color: "#00494D",
    fontWeight:"500",
    '&:hover': {
      backgroundColor: "#26C099",
      letterSpacing: '3px',
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  gridContainer:{
    marginTop: "99px",
  },
  textField:{
    backgroundColor: "#E8F0FE",
    borderRadius: 7,
  },
  // signinORup:{
  //   color: "white",
  // }
}));