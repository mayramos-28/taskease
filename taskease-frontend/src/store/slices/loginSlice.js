import { loginThunk } from "../thunks/authThunk";
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        error: null,
        success: false,
        message: null,
        login: {},
    },
    reducers: {
        login: (state, action) => {
            state.login = action.payload;
        }
    },
    extraReducers: {
        [loginThunk.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [loginThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.success = true;
        }
        ,
        [loginThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
}); 
export const { login, loading, error, message, success } = loginSlice.actions;