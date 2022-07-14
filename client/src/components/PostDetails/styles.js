import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '400px',

  },
  card: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '20px',
    color: "#00494D",
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    marginTop: "100px",
  },
  textField:{
    backgroundColor: "#E8F0FE",
    borderRadius: 7,
  },
  commentButton:{
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
  commentsOuterContainer:{
    display: 'flex',
    flexDirection: 'column',
  },

  commentsInnerContainer:{
    height:'300px',
    overflow:  'auto',
    marginRight: '30px',
  },
  styleComment: {
  display:'flex',
  alignItems:'center',
  gap: '1rem',
  marginBottom: '1rem',
  },
  styleInnerComment:{
    backgroundColor: '#00494D',
    borderRadius: '15px',
    color: '#eee',
    padding: '10px 20px',
  }
}));