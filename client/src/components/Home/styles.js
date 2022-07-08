import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    appBarSearch: {
        borderRadius: 15,
        marginBottom: "20px",
        padding: "20px",
        // backgroundColor: "#252830",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // color: "#eee",
        color: "#00494D",
        width: "90%",
      //   position: 'fixed',
      //   top:"11%",
      //   [theme.breakpoints.down('xs')]:{
      //     position:'static',
      //     width: "91%",
      // },
    },
    pagination:{
        borderRadius: 15,
        marginBlock: "20px",
        padding: "20px",
        backgroundColor: "#252830",
      //   position: 'fixed',
      //   top: "65%",
        // width: "90%",
      //   [theme.breakpoints.down('xs')]:{
      //     position:'static',
      // },
    },
    gridContainer:{
        [theme.breakpoints.down('xs')]:{
            flexDirection: 'column-reverse',
        },
    },

    // textField:{
    //     backgroundColor: "white",
    //     borderRadius: 7,
    //     '& label.Mui-focused': {
    //       color: 'green',
    //     },
    //   },
      container:{
        marginTop: "99px",
      },

      fixedPart:{
        position: 'fixed',
        height: "86vh",
        width: "330px",
        paddingRight: "15px",
        paddingBottom: "10px",
        overflowY: "auto",
        [theme.breakpoints.down('xs')]:{
         position:'static',
         width: "100%",
        
        },
      },

      searchButton:{
        borderRadius: 7,
        marginTop: 10,
        // backgroundColor: "#1FDF64",
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
      
   
}));