import * as api from "../api/index";
import { FETCH_POST, FETCH_BY_SEARCH, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, START_LOADING,END_LOADING, COMMENT } from "../constants/actionsType";

 export const getPosts = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: data});
    } catch (error) {
        console.log(error.message);
    }
 }

 export const getPost = (id) => async (dispatch) =>  {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchPost(id);

        dispatch({ type: FETCH_POST, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const createPost = (post, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        navigate(`/posts/${data._id}`);
        
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
 }

 export const updatePost = (id, post) => async (dispatch) => {
    try {
       const { data } =  await api.updatePost(id, post);

       dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
 }

 export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);

      dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message);
    }
 }

 export const likePost = (id, post) => async (dispatch) => {
    try {
        const { data } =  await api.likePost(id, post);
 
        dispatch({ type: LIKE, payload: data })
     } catch (error) {
         console.log(error.message);
     }
 }

 export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);

        dispatch({ type: COMMENT, payload: data });

        return data.comments;
    } catch (error) {
        console.log(error.message);
    }
 }