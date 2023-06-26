import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/thunks/authThunk';

export const LogoutComponent = () => {
    const dispatch = useDispatch();
    const logoutFlag = useRef(false);

    const handleLogout = () => {
        dispatch(logout()) .then(() => {
            console.error('todo bien a cerrar sesión:');
            window.location.href = '/login';
        })
        .catch((error) => {

            console.error('Error al cerrar sesión:', error);
        });;
        logoutFlag.current = true;
    };

    return (
        <button onClick={handleLogout} className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
        </button>
    );
};
