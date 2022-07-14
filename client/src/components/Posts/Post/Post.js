import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, ButtonBase } from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import moment from "moment";

import { useNavigate } from 'react-router-dom';

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts"

const Post = ( { post, setCurrentId } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));

    const [likes,setLikes] = useState(post?.likes);

    const userId = user?.result?.id || user?.result?.googleId;
    const hasLikedPost = post.likes.find((like) => like === userId);
    const handleClick = () => {
      dispatch(likePost(post._id));
      if(hasLikedPost){
        setLikes(post.likes.filter((id) => id !== userId));
      }else{
        setLikes([...post.likes, userId]);
      }
    }

const Likes = () => {
    if(likes?.length > 0) {
        return likes.find((like) => like === userId)
        ?(
            <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteIcon fontSize="medium" sx={{color: '#00494D'}}/> &nbsp; {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</Box>
            
        ) : (
            <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteBorderIcon  fontSize="medium"/> &nbsp; {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</Box>
        );
    }
    return <Box sx={{color: '#00494D', display:'flex', alignItems: 'center'}}><FavoriteBorderIcon  fontSize="medium"/> &nbsp; Like</Box>
};

const openPost = () => {
    navigate(`/posts/${post._id}`);
};
    
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openPost}>

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
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleClick}>
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