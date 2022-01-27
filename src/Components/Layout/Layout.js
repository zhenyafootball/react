import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;