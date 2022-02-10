import React from 'react';
import {getMoviesPerPage} from "../../slices/moviseSlice/moviseSlice";
import {createPages} from "../../pageCreator";
import {useDispatch, useSelector} from "react-redux";

import css from "./PagesPaginate.module.css";

const PagesPaginate = () => {
    const dispatch = useDispatch();

    const {currentPage} = useSelector(state => state['moviesReducer']);

    const pages = [];
    createPages(pages, 3225, currentPage)


    return (
        <>


            <div className={css.pages}>
                {pages.map((page, index) => <a
                    className={page === currentPage ? css.currentPage : css.page} key={index}
                    onClick={() => {
                        dispatch(getMoviesPerPage({page: page}));
                    }}>{page}</a>)}
            </div>


        </>
    );
};

export default PagesPaginate;