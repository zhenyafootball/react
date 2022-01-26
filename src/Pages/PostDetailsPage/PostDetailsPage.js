import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from "react-router-dom";

import {postService} from "../../Services/postService";

const PostDetailsPage = () => {
    const [post, setPost] = useState({});

    const {id} = useParams();

    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost(value));
    }, [id,state])

    return (
        <div>
            <h1>POST DETAILS</h1>
            {
                <div>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>

            }
            <Link to={'comments'} state={id}>
                <button>Comments</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};