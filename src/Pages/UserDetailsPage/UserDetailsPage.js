import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {userService} from "../../Services/userService";

const UserDetailsPage = () => {
    const {id} = useParams();

    const [user, setUser] = useState({})

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser(value))
    }, [id,state])


    return (
        <div>
            <h1>USER DETAILS</h1>
            {
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.address?.city}</div>
                    <div>{user.address?.street}</div>
                </div>
            }
            <Link to={'userPosts'}>
                <button>Posts of current user</button>
            </Link>

            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};