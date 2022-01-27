import React from 'react';
import {Route, Routes} from 'react-router-dom'
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Components/Layout/Layout";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import SingleUserPage from "./Pages/SingleUserPage/SingleUserPage";
import UserPostsPage from "./Pages/UserPostsPage/UserPostsPage";
import PostCommentPage from "./Pages/PostCommentPage/PostCommentPage";


const App = () => {
  return (
      <>

        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':id'} element={<SinglePostPage/>}>
                <Route path={'postComment'} element={<PostCommentPage/>}/>
              </Route>
            </Route>
            <Route path={'users'} element={<UsersPage/>}>
              <Route path={':id'} element={<SingleUserPage/>}>
                <Route path={'userPost'} element={<UserPostsPage/>}/>
              </Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
        </Routes>

      </>
  );
};

export default App;