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

export const showTask = async (id) => {
    const response = await taskeaseApi({
        path: `/tasks/show/${id}`,
        method: 'GET',
    });
    return response.task;
};
export const editTask = async (task) => {
    const response = await taskeaseApi({
        path: `/tasks/update/${task.id}`,
        method: 'PUT',
        body: task,
    });
    return response.task;
};

export const deleteTask = async (id) => {
    const response = await taskeaseApi({
        path: `/tasks/delete/${id}`,
        method: 'DELETE',
    });
    return response.task;
};