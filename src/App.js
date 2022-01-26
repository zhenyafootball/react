import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Layout from "./Components/Layout/Layout";
import {
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserAlbumsPage,
    UserDetailsPage, UserPhotosPage,
    UserPostsPage,
    UsersPage
} from "./Pages";


const App = () => {
    return (

        <div>

            <Routes>

                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'userPosts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':userId/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':photoId/photos'} element={<UserPhotosPage/>}/>
                        </Route>
                    </Route>


                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>


                </Route>

            </Routes>

        </div>
    );
};

export default App;
