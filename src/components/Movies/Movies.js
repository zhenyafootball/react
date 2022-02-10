import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMoviesGenres, getMoviesPerPage} from "../../slices/moviseSlice/moviseSlice";
import Movie from "../Movie/Movie";
import PagesPaginate from "../PagesPaginate/PagesPaginate";
import css from './Movies.module.css';
import Loading from "../Loading/Loading";

const Movies = () => {

    const {moviesPerPage, currentPage, status} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesPerPage({page: currentPage}));
    }, [])

    useEffect(() => {
        dispatch(getMoviesGenres());
    }, [])

    const themeStatus = localStorage.getItem('theme')

    return (<div className={themeStatus === 'false' ? css.MoviesRowBlack : css.MoviesRowLight}>
        {status === 'pending' && <Loading/>}
        {status === 'fulfilled' && moviesPerPage.map((movie, index) => <Movie key={index} movie={movie}/>)}

        {status === 'fulfilled' && <PagesPaginate/>}


    </div>);
};

export default Movies;