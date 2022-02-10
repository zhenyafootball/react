import React from 'react';


import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import css from './Layout.module.css'

const Layout = () => {

    return (
        <div className={css.main}>
            <div>
                <Header/>
                <Movies/>
            </div>
        </div>
    );
};

export default Layout;