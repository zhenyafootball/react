import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            {id}) {name}

            <Link to={id.toString()} state={user}>
                <button>Details</button>
            </Link>
            <Link to={`${id.toString()}/albums`}>
                <button>Albums</button>
            </Link>

        </div>
    );
};

export default User;