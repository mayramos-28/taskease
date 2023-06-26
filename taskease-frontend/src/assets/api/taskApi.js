import { taskeaseApi } from "./taskeaseApi";

export const getTasks = async (filter) => {
    const response = await taskeaseApi({
        path: `/tasks/index`,
        method: 'GET',
        query :filter
    });
    return response.tasks;
};

export const createTask = async (data) => {
    const response = await taskeaseApi({
        path: '/tasks/store',
        method: 'POST',
        body: data,
    });
    return response.task;
};