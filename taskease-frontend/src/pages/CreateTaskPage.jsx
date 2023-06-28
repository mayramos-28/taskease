import React from 'react';
import { TasKFormComponent } from "../components/TaskFormComponent";
import { useDispatch } from "react-redux";
import { createTask } from "../store/thunks/taskThunk";
import { Navigate } from "react-router-dom";

export const CreateTaskPage = () => {   
    const dispatch = useDispatch();
    const user_id = localStorage.getItem('user_id');
    const { loading, error, suceess } = useSelector(state => state.task);
    const handleSubmit = (values) => {
        dispatch(createTask({ ...values }))                 
    };
    const task = {
        title: '',
        description: '',       
        status: '',     
        expiration_date: '',
        user_id: user_id
    }
    if(loading){
        <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
    }
    if(suceess){
        <Navigate to="/tasks/allTasks" />
    }
    return (
        <>
            <div className="py-4 px-4">
                <h2 className="text-2xl font-bold mb-4">Añadir tarea</h2>
                <TasKFormComponent 
                task={task}
                onSubmit={ handleSubmit }
                btnValue="Añadir"
                errorForm={error}

                />
            </div>

        </>
    )
};