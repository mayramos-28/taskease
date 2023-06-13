import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import { registerSlice } from "./slices/registerSlice";

export const store = configureStore({
    reducer: {
        register: registerSlice.reducer,
        login: loginSlice.reducer,
        // tasks: tasksSlice.reducer,
    },
});