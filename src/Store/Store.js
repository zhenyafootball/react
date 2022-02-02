import {configureStore} from "@reduxjs/toolkit";

import todoReducers from "./todo.slice";

const store = configureStore({
    reducer: {
        todo: todoReducers
    }
});

export default store;