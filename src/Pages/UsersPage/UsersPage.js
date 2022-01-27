import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {userService} from "../../Services/userService";
import User from "../../Components/User/User";
import css from './PostPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getALl().then(value => setUsers(value));
    }, [])

    return (
        <div className={css.userWrap}>
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}

            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;