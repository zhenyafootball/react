import React from 'react';
import {Routes, Route} from 'react-router-dom'

import CarsPage from "./Pages/CarsPage/CarsPage";
import Layout from "./Components/Layout/Layout";
import UsersPage from './Pages/UsersPage/UsersPage'
import PostsPage from "./Pages/PostsPage/PostsPage";
import CommentsPage from "./Pages/CommentsPage/CommentsPage";
import UserDetails from "./Components/UserDetails/UserDetail";


const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>

                </Route>

            </Routes>

        </>);
};

export default App;