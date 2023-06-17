import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import { registerSlice } from "./slices/registerSlice";
import { taskReducer } from "./slices/taskSlice";


export const store = configureStore({
    reducer: {
        register: registerSlice.reducer,
        login: loginSlice.reducer,
        task: taskReducer,
    },
});