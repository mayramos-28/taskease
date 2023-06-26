import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, editTask, fetchTasks, showTask } from "../thunks/taskThunk";

const taskAdapter = createEntityAdapter({});
const taskSlice = createSlice({
    name: 'task',
    initialState: taskAdapter.getInitialState({
        loading: false,
        error: null,
        success: false,
    }),
    reducers: {},
    extraReducers: {
        [fetchTasks.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            taskAdapter.setAll(state, action.payload);
            return state;
        },
        [fetchTasks.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            return state;
        },
        [createTask.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [createTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            taskAdapter.addOne(state, action.payload);
            return state;
        },
        [createTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            return state;
        },
        [showTask.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [showTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            taskAdapter.setOne(state, action.payload);
        },
        [showTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteTask.pending]: (state, action) => {
            state.loading = true;
            return state
        },
        [deleteTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            taskAdapter.removeOne(state, action.payload);
        },
        [deleteTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            return state;
        },
        [editTask.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [editTask.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            taskAdapter.upsertOne(state, action.payload);
        },
        [editTask.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            return state;
        },
    }
});

export const {selectAll: selectAllTasks, selectById:selectTaskById} = taskAdapter.getSelectors(state => state.task);
export const selectTaskError = state => state.task.error;
export const selectTaskLoading = state => state.task.loading;
export const selectTaskSuccess = state => state.task.success;
export const taskReducer = taskSlice.reducer;