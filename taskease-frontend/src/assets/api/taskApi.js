import { taskeaseApi } from "./taskeaseApi";

export const getTasks = async ({filter}) => {
    const response = await taskeaseApi({
        path: `/tasks?filter=${filter}`,
        method: 'GET',
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