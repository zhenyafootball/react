import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams, useNavigate, Link} from "react-router-dom";
import {postService} from "../../Services/postsService";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null)

    const {state} = useLocation();

    // const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost(value))
    }, [id])

    return (
        <div>
            <h1>Single Post</h1>
            {post &&
                <div>
                    <div>ID: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>}
            <Link to={'postComment'} state={post}>
                <button>Comments</button>
            </Link>
            <Outlet/>
            {/*<button onClick={back}>Back</button>*/}
        </div>
    );
};

export default SinglePostPage;