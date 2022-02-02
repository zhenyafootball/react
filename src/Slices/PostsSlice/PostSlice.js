import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../Services/postsService";


export const getAllPostsThunk = createAsyncThunk(
    'getAllPostsThunk/postsSlice',
    async (_, {dispatch}) => {
        try {
            const posts = await postsService.getAll();
            dispatch(getAll(posts))
        }catch (e){}

    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: []
    },
    reducers: {
        getAll: (state, action) => {
            state.posts = [...action.payload];
        }
    }
})


const postsReducer = postsSlice.reducer
export default postsReducer;

export const {getAll} = postsSlice.actions