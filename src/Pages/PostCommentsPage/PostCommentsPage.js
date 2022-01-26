import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../Services/postService";

const PostCommentsPage = () => {
    const {state: id} = useLocation();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getPostComments(id).then(value => setComments(value));
    }, [id])

    return (
        <div>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <div>{comment.id}</div>
                        <div>{comment.name}</div>
                        <div>{comment.email}</div>
                        <div>{comment.body}</div>
                        <hr/>
                    </div>
                ))
            }
        </div>

    );
};

export {PostCommentsPage};