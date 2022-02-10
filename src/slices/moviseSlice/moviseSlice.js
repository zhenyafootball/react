import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


export const getMoviesPerPage = createAsyncThunk(
    'moviesSlice/getMoviesPerPage',
    async ({page}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setMoviesPerPage({page}))
            return await movieService.getByPage(page)
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const getMoviesGenres = createAsyncThunk(
    'moviesSlice/getMoviesGenres',
    async (_, {dispatch}) => {
        const genres = await movieService.getGenres();
        dispatch(setGenres(genres))
    }
);


const moviesSlice = createSlice({
    name: '/movieSlice',
    initialState: {
        moviesPerPage: [],
        currentPage: 1,
        pagesCount: 3225,
        genres: [],
        genresOfCurrentMovie: [],
        status: null,
        error: null,
        switcherStatus: true,
    },
    reducers: {
        setMoviesPerPage: (state, action) => {
            state.moviesPerPage = action.payload.results
            state.currentPage = action.payload.page;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        changeSwitcherStatus: (state) => {
            state.switcherStatus = !state.switcherStatus;
            localStorage.setItem('theme', !state.switcherStatus);

        }

    },
    extraReducers: {
        [getMoviesPerPage.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMoviesPerPage.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.moviesPerPage = action.payload.results

        }
    }

});


const moviesReducer = moviesSlice.reducer;

export default moviesReducer;

export const {setMoviesPerPage, setGenres, changeSwitcherStatus} = moviesSlice.actions;