import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../Services/userService";

const UserPostsPage = () => {
    const {id} = useParams()

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts(id).then(value => setUserPosts(value))
    }, [id])

    return (
        <div>
            {userPosts.map(userPost => (
                <div key={userPost.id}>
                    <div>{userPost.id}</div>
                    <div>{userPost.title}</div>
                </div>
            ))}
        </div>
    );
};

export {UserPostsPage};