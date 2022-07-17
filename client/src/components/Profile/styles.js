import { makeStyles } from "@material-ui/core/styles";
 
export default makeStyles((theme) => ({
    avatar:{
        width: '7rem',
        height: '7rem',
        position:'absolute',
        top: '47%',
        left: '17%',
        transform: 'translate(-50%, -50%)',
        border: '7px solid #C5E4E7',
    },

    overlayName: {
        position:'absolute',
        top: '48.8%',
        left: '32%',
        transform: 'translate(-50%, -50%)',
    },

    info:{
        margin: '3.7rem 0 2rem 0',
        borderRadius: '15px',
        padding:'20px 30px',
        color: '#00494D',
    },

    EditButton: {
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: "#26C0AB",
        color:"#00494D",
        fontWeight:"600",
        transition: ".5s ease",
        '&:hover': {
          backgroundColor: "#C5E4E7",
        },
      },

      FollowButton: {
        borderRadius: 7,
        marginLeft: '1.3rem',
        backgroundColor: "#26C0AB",
        color:"#00494D",
        fontWeight:"600",
        transition: ".5s ease",
        '&:hover': {
          backgroundColor: "#C5E4E7",
        },
      },
}));
