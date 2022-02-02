import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    const {state:{id, username, email}} = useLocation();


    return (
        <div>
            <div>{id}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default UserDetails;