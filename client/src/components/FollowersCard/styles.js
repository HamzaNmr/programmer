import { makeStyles } from "@material-ui/core/styles";
 
export default makeStyles((theme) => ({
    paper: {
        padding: '20px 30px', borderRadius: '15px', border: '3px solid #00494D', height: '370px',width:'273px', overflow: 'auto',
        [theme.breakpoints.down('xs')]:{
            width: "357px",
           },
    }
}));