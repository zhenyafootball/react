import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./CarsSlice/CarsSlice";
import usersReducer from "./UserSlice/UserSlice";
import postsReducer from "./PostsSlice/PostSlice";
import commentsReducer from "./CommentSlice/CommentSlice";

const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }

});

export default store;