import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    profileCard: {
        marginBottom: "20px",
        borderRadius: 15,
        // backgroundColor: "#252830",
        // color: "#eee",
        // position: 'fixed',
        // width: "337px",
        // [theme.breakpoints.down('xs')]:{
        //     position:'static',
        //     width: "100%",
        // },
    },
    text: {
        textAlign: 'center',
        paddingBlock: 30,
        marginTop: "7px"
    },
    overlay: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      userName: {
        fontWeight: "700",
         fontSize: "1.7rem",
      },
      follow:{
        fontWeight: 700, 
      }
 }));