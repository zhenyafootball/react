import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPostsThunk} from "../../Slices/PostsSlice/PostSlice";
import Post from "../../Components/Post/Post";

const PostsPage = () => {

    const {posts} = useSelector(state => state['postsReducer']);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPostsThunk());
    }, [dispatch])


    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}


        </div>
    );
};

export default PostsPage;