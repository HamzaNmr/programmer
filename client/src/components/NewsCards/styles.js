import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) =>({
    container:{
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '59.3vh',
        padding: '10%',
        borderRadius: '15px',
        color: '#eee',
        
    },
    infoCard:{
        display:'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '0 100px 30px 0',
    },

    cardTwo:{
        width: '800px',
        height: 'auto',
        padding: '10%',
        borderRadius: '15px',
        backgroundColor: 'white', 
        flexWrap: 'wrap',
        wordBreak: 'break-word',
        color:'#00494D', 
        [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
    },
    cardThree:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:'30px',
        width: '800px',
        height: 'auto',
        padding: '10%',
        borderRadius: '15px',
        backgroundColor: 'white', 
        flexWrap: 'wrap',
        wordBreak: 'break-word',
        color:'#00494D', 
        [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
    },
    image:{
        borderRadius: '15px',
    }
}))

export default styles;