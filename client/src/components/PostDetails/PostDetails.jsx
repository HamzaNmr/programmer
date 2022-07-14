import React from 'react';

import { Paper, Typography, Divider, CircularProgress, CardMedia } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { useParams, useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { useEffect } from 'react';

import { getPost, getPostsBySearch} from '../../actions/posts';

import { CommentsSection } from './CommentsSection';

const PostDetails = () => {

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  },[id]);

  useEffect(() => {
  if(post){
    dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    console.log('post', post);
  }
  },[post]);

  if(!post) return null;

  if(isLoading){
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em'/>
      </Paper>
    );
  }
  
  console.log('here', posts);
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  console.log(recommendedPosts);
  const openPost = (_id) => {
    navigate(`/posts/${_id}`, {replace: true});
  }
  
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px', marginTop: "100px", }} elevation={6}>
    <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentsSection post={post}/>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterButtom variant='h5'>You might also like:</Typography>
          <Divider/>
          <div className={classes.recommendedPosts}>
          {recommendedPosts.map(({title, description, likes, name, selectedFile, _id}) => (
            <div style={{margin: '20px', cursor: 'pointer', maxWidth: "300px",}} onClick={() => openPost(_id)} key={_id}>
              <Paper style={{ padding: '20px', borderRadius: '15px', backgroundColor:"#C4E3E6",}}>
              <img src={selectedFile} style={{width:"100%", borderRadius:"15px",}}/>
              <Typography guteerBottom variant='h6'>{title}</Typography>
              <Typography guteerBottom variant='subtitle2'>{name}</Typography>
              <Typography guteerBottom variant='subtitle2'>{description}</Typography>
              <Typography guteerBottom variant='subtitle1'>Likes: {likes.length}</Typography>
              </Paper>
            </div>
          ))}
          </div>
        </div>
       
      ) }
      </Paper>
  )
}

export default PostDetails;