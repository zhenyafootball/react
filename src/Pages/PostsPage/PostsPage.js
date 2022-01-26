import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../Services/postService";
import Post from "../../Components/Post/Post";
// import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    }, [])

    return (
        <div >
            <div>
                <h1>POSTS</h1>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>

            <Outlet/>
        </div>
    );
};

export {PostsPage};