import React from 'react';

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div>

            <hr/>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <hr/>

        </div>
    );
};

export default Comment;