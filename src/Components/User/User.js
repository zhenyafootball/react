import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <hr/>

            <div>{name}</div>
            <Link to={id.toString()} state={user}>
                <button>Details</button>
            </Link>

            <hr/>
        </div>
    );

};

export default User;