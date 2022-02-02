import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./CarsSlice/CarsSlice";
import usersReducer from "./UsersSlice/UsersSlice";
import postsReducer from "./PostsSlice/PostSlice";
import commentsReducer from "./CommentsSlice/CommentSlice";

const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }

});

export default store;