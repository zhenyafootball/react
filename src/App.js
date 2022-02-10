import React, {useEffect} from 'react';

import Layout from "./components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import {getMoviesGenres} from "./slices/moviseSlice/moviseSlice";
import Movies from "./components/Movies/Movies";

const App = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesGenres())
    }, [])
    return (<div>

        <Routes>

            <Route path={'/'} element={<Layout/>}/>
            <Route path={':id'} element={<MovieDetails/>}/>


        </Routes>


    </div>);
};

export default App;

document.body.style.margin = '0';
// import React, {useState} from 'react';
//
// import {movieService} from "./services/movieService";
// import css from './App.css'
// import {createPages} from "./pageCreator";
// import {useDispatch} from "react-redux";
// import {getMoviesPerPage} from "./slices/moviseSlice/moviesSlice";
//
//
// const App = () => {
//
//     const dispatch = useDispatch();
//
//
//
//     const pages = [];
//     createPages(pages, 3225, currentPage)
//
//     const [currentPage, setCurrentPage] = useState(null);
//
//     const [movies, setMovies] = useState([])
//
//     const getPage = (page) => {
//
//         movieService.getByPage(page).then(value => setMovies(value.results));
//         dispatch(getMoviesPerPage(2))
//         setCurrentPage(page);
//     }
//     return (
//         <div>
//             {pages.map((page, index) => <span className={currentPage === page ? css.currentPage : css.page} key={index}
//                                               onClick={() => {
//                                                   getPage(page);
//                                               }}>{page}</span>)}
//             <div>
//                 {pages.length && movies.map((movie, index) => <span key={index}
//                                                                     style={{display: 'flex'}}>{movie.id}</span>)}
//             </div>
//
//         </div>);
// };
//
// export default App;