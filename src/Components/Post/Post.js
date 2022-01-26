import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <>
            <div>
                {id}) {title}
            </div>
            <Link to={id.toString()} state={post}>
                <button>Post Detail</button>
            </Link>
        </>
    );
};

export default Post;