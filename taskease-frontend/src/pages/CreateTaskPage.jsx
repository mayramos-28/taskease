import { useEffect, useRef } from "react";
import { TasKFormComponent } from "../components/TaskFormComponent";
import { useDispatch } from "react-redux";
import { createTask } from "../store/thunks/taskThunk";
import { Navigate } from "react-router-dom";


export const CreateTaskPage = () => {

    //const firstExecution = useRef(true);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     if (firstExecution.current) {
    //         dispatch(createTask());
    //         firstExecution.current = false;
    //     }

    // }, [dispatch, firstExecution]);

    const task = {
        title: '',
        description: '',       
        status: '',     
        expiration_date: ''
    }
    return (
        <>
            <div className="py-4 px-4">
                <h2 className="text-2xl font-bold mb-4">Añadir tarea</h2>
                <TasKFormComponent 
                task={task}
                onSubmit={(values) => {
                    dispatch(createTask({ ...values })).then(
                        () => Navigate("/")
                    );
                }}
                btnValue="Añadir"

                />
            </div>

        </>
    )
};