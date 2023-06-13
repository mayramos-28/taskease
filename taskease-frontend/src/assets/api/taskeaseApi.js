export const TASKEASE_API_URL = 'http://localhost:8081/api';

export const taskeaseApi = async (path, method, body, query) => {

    const endpoint = `${TASKEASE_API_URL}${path}` + (query ? `?${new URLSearchParams(query)}` : '');
    const token = localStorage.getItem('token');
    const response = await fetch(endpoint, {
        method,
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'

        },
        body: typeof body === 'object' ? JSON.stringify(body) : body,
    });
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
        throw new Error(data.message);
    }

    return data;
};