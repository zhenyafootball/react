import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import {userService} from "../../Services/userService";

const SingeUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null)

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser(value))
    }, [id])

    return (<div>
        <h1>Single User</h1>
        {user && (<div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.address?.street}</div>
            <div>{user.address?.city}</div>
            <Link to={'userPost'} state={user}>
                <button>Posts</button>
            </Link>
            <Outlet/>

        </div>)}
    </div>);
};

export default SingeUserPage;