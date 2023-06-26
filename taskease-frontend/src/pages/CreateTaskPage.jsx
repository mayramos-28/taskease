import React from 'react';
import { TasKFormComponent } from "../components/TaskFormComponent";
import { useDispatch } from "react-redux";
import { createTask } from "../store/thunks/taskThunk";
import { Navigate } from "react-router";

export const CreateTaskPage = () => {   
    const dispatch = useDispatch();
    const user_id = localStorage.getItem('user_id');
    const handleSubmit = (values) => {
        dispatch(createTask({ ...values }));
        window.location.href = '/task/allTasks';
    };
    const task = {
        title: '',
        description: '',       
        status: '',     
        expiration_date: '',
        user_id: user_id
    }
    return (
        <>
            <div className="py-4 px-4">
                <h2 className="text-2xl font-bold mb-4">Añadir tarea</h2>
                <TasKFormComponent 
                task={task}
                onSubmit={ handleSubmit }
                btnValue="Añadir"

                />
            </div>

        </>
    )
};