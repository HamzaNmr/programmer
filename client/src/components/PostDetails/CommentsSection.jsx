import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { commentPost }from '../../actions/posts';

import { Typography, TextField, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';

export const CommentsSection = ({ post }) => {
      const classes = useStyles();
      const [comments,setComments] = useState(post?.comments);
      const [comment,setComment] = useState('');
      const dispatch = useDispatch();
      const user = JSON.parse(localStorage.getItem('profile'));

      const commentsRef = useRef();
      const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));

        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }

    console.log(post);
  return (
    <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                {comments.map((c,i) => (
                 
                <div className={classes.styleComment} key={i}>
                   <Avatar  alt={c.split(': ')[0]} sx={{ width: 90, height: 90,}}>
                        {c.split(': ')[0].charAt(0)}
                    </Avatar>
                    
                    <Typography key={i} gutterBottom variant='subtitle1'>
      
                  <div>
                  <strong >{c.split(': ')[0]}</strong>
                   <br/>
                   {c.split(':')[1]}
                  </div>
                   
                  </Typography>
                </div>
               
                ))}
                <div ref={commentsRef} />
            </div>
            {user?.result?.name && (
              <div style={{width:"70%"}}>
              <Typography gutterBottom variant='h6'>Write a comment</Typography>
              <TextField fullWidth rows={4} variant='outlined' label='Comment' multiline className={classes.textField}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              />
              <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant='contained' onClick={handleClick} className={classes.commentButton}>Comment</Button>
              </div>
            )}
        </div>
    </div>
  )
}
