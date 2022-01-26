import React from 'react';
import { NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to={'/users'}>USERS</NavLink>
                <NavLink to={'/posts'}>POSTS</NavLink>
            </div>

            <Outlet/>

        </>
    );
};

export default Layout;