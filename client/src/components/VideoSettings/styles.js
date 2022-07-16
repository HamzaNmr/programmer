import { makeStyles } from "@material-ui/core/styles";
 
export default makeStyles((theme) => ({
    video: {
        width: '1100px',
        height: '485px',
        objectFit: 'cover',
        borderRadius: '15px',
        [theme.breakpoints.down('xs')]: {
          width: '300px',
        },
      },

      videoTwo: {
        width: '540px',
        height: '485px',
        objectFit: 'cover',
        borderRadius: '15px',
        [theme.breakpoints.down('xs')]: {
          width: '300px',
        },
      },

      gridContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
        },
      },
      paper: {
        width: '1100px',
        height: '530px',
        padding: '10px',
        border: '5px solid #00494D',
        margin: '10px',
        borderRadius: '15px',
        [theme.breakpoints.down('xs')]: {
          width: '300px',
          height: 'auto',
          marginLeft: '35px'
        },
      },

      paperTwo: {
        width: '540px',
        height: '530px',
        padding: '10px',
        border: '5px solid #00494D',
        margin: '10px',
        borderRadius: '15px',
        [theme.breakpoints.down('xs')]: {
          width: '300px',
          height: 'auto',
          marginLeft: '35px'
        },
      },

      root: {
        display: 'flex',
        // flexDirection: 'column',
      },
      gridContainerOption: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
        },
      },
      containerOption: {
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
          width: '80%',
        },
      },
      margin: {
        marginTop: 20,
      },
      padding: {
        padding: 20,
      },
      paperOption: {
        border: '5px solid #00494D',
        borderRadius: '15px',
        width: '300px',
        height: '550px',
      },

      callButton: {
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

      endCallButton: {
        borderRadius: 7,
        marginBottom: 10,
        color:"white",
        fontSize: "1.1rem",
        fontWeight:"600",
        transition: ".5s ease",
        '&:hover': {
          letterSpacing: "3px",
        },
      },
      textField:{
        backgroundColor: "#E8F0FE",
        borderRadius: 7,
      },


     answerButton:{
      width: '75px',
      height: '75px',
      padding: '10px',
      borderRadius: '50%',
      backgroundColor: '#26C0AB',
      color: 'white',
      '&:hover': {
        backgroundColor: '#26C099'
      },
     }
      
}));