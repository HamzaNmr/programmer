import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, blue } from "@material-ui/core/colors";

 export default makeStyles((theme) => ({
    appBar: {
        padding: '0 30px',
        backgroundColor: "#00494D",
        color: "#eee",
        position: 'fixed',
        top: 0,
        left: 0,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
      },
      toolbar: {
        dispaly: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      profile: {
        display: 'flex',
        alignItems: 'center',
        color: '#eee',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          height: 'auto',
        },
      },
     
      userName: {
        marginLeft: "10px",
      },

      signinButton: {
        marginLeft: "10px",
        backgroundColor:"#26C0AB",
        color: "#00494D",
        fontWeight:"500",
        '&:hover': {
          backgroundColor: "#eee",
        },
      },

      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      avatar: {
        // color: theme.palette.getContrastText(blue[900]),
        color: "#333",
        background:"linear-gradient(120deg, #0172dd, white)",
        marginLeft: "10px",
      },
      spaces: {
        dispaly: 'flex',
        // gap: "20px",
      },
      menu: {
        marginTop: '60px',
      },
      navBarItem:{
        transition: 'all 0.7s ease',
        '&:hover':{
          transform: 'scale(1.1)',
        }
      }
 }));