import React from "react";

import { Grid, Typography } from "@material-ui/core";

import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {

    const {posts, isLoading } = useSelector((state) => state.posts);
    // const posts = postsData.posts;
    const classes = useStyles();

   
    console.log(posts);

    if(!posts.length && !isLoading){
        return 'No posts';
    }
    return (
        isLoading ? <Card sx={{ maxWidth: 700, m: 2, padding: 3, backgroundColor:"rgba(1,1,1,0.1)"}}>
        <Skeleton sx={{ height: 190, backgroundColor:"rgba(100,100,100,0.3)" }}  variant="rectangular" />
        <br/>
        <Typography variant="h5">
        <Skeleton sx={{ height: 30, backgroundColor:"rgba(100,100,100,0.3)" }}  variant="rectangular" />
        </Typography>
        <br/>
        <Skeleton sx={{ height: 20, width:"70%",backgroundColor:"rgba(100,100,100,0.3)" }}  variant="rectangular" />
        <br/>
        <Typography variant="h5">
        <Skeleton sx={{ height: 20,width:"90%", backgroundColor:"rgba(100,100,100,0.3)" }}  variant="rectangular" />
        </Typography>
        </Card>
        
        : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} >
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;