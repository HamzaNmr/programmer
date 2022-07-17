import { makeStyles } from "@material-ui/core/styles";
 
export default makeStyles(() => ({
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
        left: '27%',
        transform: 'translate(-50%, -50%)',
    },

    info:{
        margin: '3.7rem 0 2rem 0',
        borderRadius: '15px',
        padding:'20px 30px',
        color: '#00494D',
    }
}));
