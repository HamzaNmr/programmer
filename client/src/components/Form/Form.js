import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Hidden } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({title: '', description: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
         
        }else{
            dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
          
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', description: '', tags: '', selectedFile: '' });
    }


    
      

    if(!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    You are our guest for now, so please Sign In to join us and be member in our special world.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}` } onSubmit={handleSubmit}>
                <Typography variant="h6" style={{fontWeight: 700}}>{currentId ? 'Edit' : 'Create' } a post</Typography>
               
                <TextField 
                className={classes.textField}
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={postData.title} 
                onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>

                <TextField 
                className={classes.textField}
                name="description" 
                variant="outlined" 
                label="Description" 
                fullWidth 
                value={postData.description} 
                onChange={(e) => setPostData({ ...postData, description: e.target.value})}/>

                <TextField 
                className={classes.textField}
                name="tags" 
                variant="outlined"
                label="Tags" 
                fullWidth 
                value={postData.tags} 
                onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>

                <div className={classes.fileInput}>
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={ ({base64}) => setPostData({ ...postData, selectedFile: base64 }) }
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth> Submit </Button>
                <Button variant="contained"  size="small" fullWidth onClick={clear} className={classes.clearButton}> Clear </Button>
            </form>
        </Paper>
    );
}

export default Form;