import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-betwwen',
        alignItems: 'center',
        padding: '10px 30px',
    },
    heading: {
        color: 'rgba(108, 52, 131, 1)'
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
      },
    //   toolbar: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     width: '400px',
    //     [theme.breakpoints.down('sm')]: {
    //       width: 'auto',
    //     },
    //   },
    //   profile: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     width: '400px',
    //     alignItems: 'center',
    //     [theme.breakpoints.down('sm')]: {
    //       width: 'auto',
    //       marginTop: 20,
    //       justifyContent: 'center',
    //     },
    //   },
    //   logout: {
    //     marginLeft: '20px',
    //   },
    //   userName: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //   },
    //   brandContainer: {
    //     display: 'flex',
    //     alignItems: 'center',
    //   },
    //   purple: {
    //     color: theme.palette.getContrastText(deepPurple[500]),
    //     backgroundColor: deepPurple[500],
    //   },
 }));