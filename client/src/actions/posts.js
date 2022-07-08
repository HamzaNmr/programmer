import * as api from "../api/index";
import { FETCH_BY_SEARCH, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, START_LOADING,END_LOADING } from "../constants/actionsType";

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

 export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

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