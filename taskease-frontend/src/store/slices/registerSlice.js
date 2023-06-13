import { registerThunk } from "../thunks/authThunk";
import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        loading: false,
        error: null,
        success: false,
        message: null,
        register: {},
    },
    reducers: {
        register: (state, action) => {
            state.register = action.payload;
        }
    },
    extraReducers: {
        [registerThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.success = true;
        },
        [registerThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const { register, loading, error, message, success} = registerSlice.actions;