
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
    // backgroundColor: "#252830",
    color: "#00494D",
    // position: 'fixed',
    // top: "37%",
    width:"307px",
    [theme.breakpoints.down('xs')]:{
      
      width: "93%",
  },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px ',
    borderRadius: 7,
  },
  buttonSubmit: {
    borderRadius: 7,
    marginBottom: 10,
    backgroundColor: "#26C0AB",
    color:"#00494D",
    fontSize: "1.1rem",
    fontWeight:"600",
    transition: ".5s ease",
    '&:hover': {
      backgroundColor: "#C5E4E7",
      letterSpacing: "3px",
    },
  },
  clearButton:{
    borderRadius: 7,
    backgroundColor: "#00494D",
    color:"#C5E4E7",
    fontSize: "1.1rem",
    fontWeight:"600",
    transition: ".5s ease",
    '&:hover': {
      backgroundColor: "#00494D",
      letterSpacing: "3px",
    },
  },
  textField:{
    backgroundColor: "#E8F0FE",
    borderRadius: 7,
  },
 
}));