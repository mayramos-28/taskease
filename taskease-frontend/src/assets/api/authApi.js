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
    localStorage.setItem('user_id', response.user_id);
    return response.message;
};

export const logout = async () => {
    const response = await taskeaseApi({
        path: '/auth/logout',
        method: 'POST',
    });
    localStorage.removeItem('token');
    return response.message;
};