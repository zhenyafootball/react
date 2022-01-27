import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../Services/postsService";
import Post from "../../Components/Post/Post";


const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getALl().then(value => setPosts([...value]));
    }, [])

    return (
        <div >
            <div>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
        ;
};

export default PostsPage;