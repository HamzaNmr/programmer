import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts"

const Post = ( { post, setCurrentId } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

const Likes = () => {
    if(post.likes.length > 0) {
        return post.likes.filter((like) => like === (user?.result?.id || user?.result?.googleId))
        ?(
            <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteIcon fontSize="medium" sx={{color: '#00494D'}}/> &nbsp; {post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</Box>
            
        ) : (
            <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteBorderIcon  fontSize="medium"/> &nbsp; {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</Box>
        );
    }
    return <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteBorderIcon  fontSize="medium"/> &nbsp; Like</Box>
}
    
    return (
        <Card className={classes.card} >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{ post.name }</Typography>
                <Typography variant="body2">{ moment(post.createdAt).fromNow() }</Typography>
            </div>
            {
                (user?.result?.id === post?.creator || user?.result?.googleId === post.creator) &&
                
                (
                    <div className={classes.overlay2}>
                    <Button style={{color: "white"}} size="small" onClick={() => setCurrentId(post._id)} >
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                )
            }
            <div className={classes.details}>
                <Typography variant="body2" >
                    { post.tags.map((tag) => `# ${tag}  `) }
                 </Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom >{ post.title }</Typography>
            <CardContent className={classes.description}>
            <Typography variant="body2" component="p" gutterBottom >{ post.description }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                   <Likes />
                </Button>

                {
                (user?.result?.id === post?.creator || user?.result?.googleId === post.creator) &&
                
                (<Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="medium" />
                    &nbsp;
                    Del
                </Button>)
                }

            </CardActions>
        </Card>
    );
}

export default Post;