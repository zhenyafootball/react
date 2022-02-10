import React from 'react';
import {useSelector} from "react-redux";
import css from '../Header/Header.module.css'

const DropDownGenres = () => {

    const {genres} = useSelector(state => state['moviesReducer']);

    console.log(genres)

    return (
        <div className={css.genres}>
            {genres.map((genre, index) => (
                <div key={index}>
                    {genre.name}
                    <input type="checkbox"/>
                </div>
            ))}
        </div>
    );
};

export default DropDownGenres;