import { createAsyncThunk } from '@reduxjs/toolkit';
import {createTask as createTaskApi, getTasks as getTasksApi, showTask as showTaskApi, deleteTask as deleteTaskApi, editTask as editTaskApi} from '../../api/taskApi';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (filter) => await getTasksApi(filter)
);

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (data) => await createTaskApi(data)
);
//pendiente de implementar en mejora posterior
export const showTask = createAsyncThunk(
    'tasks/showTask',
    async (id) => await showTaskApi(id)
);
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => await deleteTaskApi(id)
);
export const editTask = createAsyncThunk(
    'tasks/editTask',
    async (task) => await editTaskApi(task)
);