import React from 'react';

import css from './Movie.module.css'
import {Link} from "react-router-dom";
import {genresFinder} from "../../genresFinder";
import {useSelector} from "react-redux";

const Movie = ({movie}) => {

    const {id, poster_path, title, vote_average, overview, release_date, genre_ids} = movie
    const {genres} = useSelector(state => state['moviesReducer']);

    const currentGenresArr = [];
    genresFinder(genres, genre_ids, currentGenresArr);

    const themeStatus = localStorage.getItem('theme')


    return (
        <div className={css.Movie}>

            <Link to={id.toString()} state={movie}>
                <div className={css.dws}>
                    <div className={css.blocImg}><img
                        src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={`${title}`}/>
                        <div className={css.blocText}>
                            <div className={css.text}>
                                <h2>Details <span>of this movie</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={themeStatus === 'true' ? css.titleBlack : css.titleLight}>
                    {title}
                </div>
                <div className={themeStatus === 'true' ? css.ratingBlack : css.ratingLight}>
                    <span>Rating</span>: {vote_average}</div>
                {/*<div className={css.overview}>{overview}</div>*/}
                <div className={themeStatus === 'true' ? css.release_dataBlack : css.release_dataLight}><span>Release date:</span> {release_date}
                </div>
                <div className={css.genres}>
                    {currentGenresArr.map((genre, index) => <span key={index}
                                                                  className={themeStatus === 'true' ? css.genreBlack : css.genreLight}>{genre}</span>)}
                </div>


            </Link>


        </div>
    );
};

export default Movie;