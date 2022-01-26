import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import User from "../../Components/User/User";
import {userService} from "../../Services/userService";
import css from './UsersPage.module.css'


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    return (<div className={css.usersPageWrap}>
        <div>
            <h1>USERS</h1>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
        <Outlet/>
    </div>);
};

export {UsersPage};