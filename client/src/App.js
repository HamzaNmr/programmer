import React, {useEffect} from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Profile from './components/Profile/Profile';
import News from './components/News/News';



// import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

   


    // const alanKey = 'c306ca8766f3601999e8e573e3e76b5d2e956eca572e1d8b807a3e2338fdd0dc/stage';

    // useEffect(() => {
    //     alanBtn({
    //         key: alanKey,
    //         onCommand: ({ command }) => {
    //             if(command === 'navigate'){
    //                  alert('alert gone');
    //             }
    //         }
    //     })
    // }, [])

    return (
        <BrowserRouter>
        <Container maxWidth="xl">
               <Navbar />
               <Routes>
                  <Route path="/" exact element={<Navigate to="/posts"/>} />
                  <Route path="/posts" exact element={<Home/>} />
                  <Route path="/posts/search" exact element={<Home/>} />
                  <Route path="/posts/:id" exact element={<PostDetails/>} />
                  <Route path="/auth" exact element={<Auth/>} />
                  <Route path="/profile" exact element={<Profile/>} />
                  <Route path="/news" exact element={<News/>} />
                </Routes>
                </Container>
        </BrowserRouter>
    );
}

export default App;