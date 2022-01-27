import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const UserPostsPage = () => {
    const {state: {id}} = useLocation();

    const [userPosts, setUserPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setUserPosts(value));
    }, [])

    return (<div>
        {userPosts && userPosts.map(post => (<div key={post.id}>
            <div>{post.id}</div>
            <div>{post.title}</div>
        </div>))}
    </div>);
};

export default UserPostsPage;