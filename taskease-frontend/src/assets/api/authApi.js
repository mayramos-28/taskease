import { taskeaseApi } from "./taskeaseApi";

export const register = async (data) => {
    const response = await taskeaseApi({
        path: '/auth/register',
        method: 'POST',
        body: data,
    });
    return response.message;
};

export const login = async (data) => {
    const response = await taskeaseApi({
        path: '/auth/login',
        method: 'POST',
        body: data,
    });
    localStorage.setItem('token', response.token);
    return response.message;
};