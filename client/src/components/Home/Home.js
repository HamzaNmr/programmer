import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Box, Paper, AppBar, TextField, Button, Typography } from '@material-ui/core';
import { useNavigate, useLocation} from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import ProfileCard from "../ProfileCard/ProfileCard";
import  Pagination  from "../pagination";
import { ClassNames } from "@emotion/react";
import useStyles from "./styles";



const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const classes = useStyles();

   


    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);


    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery  = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);


    const searchPost = () => {
        if(search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));

            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }else{
            navigate('/', {replace: true});
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            searchPost();
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag])
    }

    const handleDelete = (tagDeleted) => {
      setTags(tags.filter((tag) => tag !== tagDeleted ))
    }
     
    return (
        <Grow in>
                    <Container maxWidth="xl" className={classes.container}>
                        <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={ClassNames.gridContainer}>
                           
                            <Grid item xs={12} sm >
                               <Box className={classes.fixedPart}>
                               <ProfileCard fullWidth />
                                {/* <Paper className={classes.pagination} elevation={3}>
                                    <Pagination/>
                                </Paper> */}
                               </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>

                            <Grid item xs={12} sm >
                           <Box className={classes.fixedPart}>
                           <Paper className={`${classes.appBarSearch} ${classes.root}`}  color="inherit" elevation={3}>
                                    <Typography variant="h6" style={{fontWeight: 700}}>Search</Typography>
                                    <TextField 
                                    className={classes.textField}
                                     name="search"
                                     variant="outlined"
                                     label="Search"
                                     fullWidth
                                     onKeyPress={handleKeyPress}
                                     value={search}
                                     onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <ChipInput 
                                    // className={classes.textField}
                                    variant="outlined"
                                    style={{padding: "5px 10px"}}  
                                    placeholder="Search by tags"
                                    value={tags}
                                    onAdd={handleAdd}
                                    onDelete={handleDelete}
                                    fullWidth/>
                                        

                                    <Button className={classes.searchButton} onClick={searchPost} type='submit' fullWidth>Explore</Button>

                                </Paper>
                                <Form currentId={currentId} setCurrentId={setCurrentId} /> 
                            </Box> 
                            </Grid>
                        </Grid>
                    </Container>
        </Grow>
    );
}

export default Home;