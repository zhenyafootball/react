import React, {useState} from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'
import ColorSwitcher from "../colorSwitcher/colorSwitcher";
import {useSelector} from "react-redux";

import DropDownGenres from "../DropDownGenres/DropDownGenres";


const Header = () => {

    const {currentPage} = useSelector(state => state['moviesReducer']);
    const [open, setOpen] = useState(false)
    localStorage.getItem('theme');
    return (
        <>
            <div className={css.Header}>
                <Link to={'/'}>
                    <ul className={css.nav}>
                        <li><a href="#">Home</a></li>
                    </ul>
                </Link>

                <div className={css.colorSwitcher}>
                    <ColorSwitcher/>
                </div>

                <button className={css.button} onClick={() => setOpen(!open)}>
                    Choose genres
                </button>

            </div>
            <div>{open && <DropDownGenres/>}</div>
        </>
    );
};

export default Header;