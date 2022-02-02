import React from 'react';

const Post = ({post:{id, title, body}}) => {

    return (
        <div>
            <hr/>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export default Post;