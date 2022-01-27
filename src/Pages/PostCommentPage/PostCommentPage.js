import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import post from "../../Components/Post/Post";

const PostCommentPage = () => {

    const {state: {id}} = useLocation();

    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(value => setPostComments(value));
    }, [])

    return (
        <div>

            {postComments && postComments.map(comment => (
                <div key={comment.id}>
                    <div>{comment.name}</div>
                    <div>{comment.email}</div>
                    <hr/>
                </div>))}

        </div>
    );
};

export default PostCommentPage;