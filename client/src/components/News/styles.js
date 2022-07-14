import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
   logo: {
        height: '50vmin',
        borderRadius: '15%',
        padding: '0 5%',
        margin: '3% 0',
        [theme.breakpoints.down('sm')]: {
          height: '35vmin',
        },
      },
}))

export default styles;