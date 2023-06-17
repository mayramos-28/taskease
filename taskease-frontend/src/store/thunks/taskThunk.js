import { createAsyncThunk } from '@reduxjs/toolkit';
import {createTask as createTaskApi, getTasks as getTasksApi} from '../../assets/api/taskApi';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async ({filter}) => await getTasksApi({filter})
);

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (data) => await createTaskApi(data)
);