import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../Services/commentsService";

export const getAllCommentsThunk = createAsyncThunk(
    'commentsSlice/getAllCommentsThunk',
    async (_, {dispatch}) => {
        const comments = await commentsService.getAll();
        dispatch(setComments(comments))

    }
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: []
    },
    reducers: {
        setComments: (state, action) => {
            state.comments = [...action.payload]
        }
    },

});

const commentsReducer = commentsSlice.reducer;
export default commentsReducer;

export const {setComments} = commentsSlice.actions;