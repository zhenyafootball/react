import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../Services/userService";

export const getAllUsersThunk = createAsyncThunk(
    'getAllUsersThunk/usersSlice',
    async (_, {dispatch}) => {
        try {
            const users = await userService.getAll()
            dispatch(getAllUsers(users))
        } catch (e) {
        }
    }
);

const usersSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: []
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.users = [...action.payload];
        }
    }
})


const usersReducer = usersSlice.reducer;
export default usersReducer

export const {getAllUsers} = usersSlice.actions;