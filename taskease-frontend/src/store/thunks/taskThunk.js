export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async ({filter}) => await getTasks({filter})
);
