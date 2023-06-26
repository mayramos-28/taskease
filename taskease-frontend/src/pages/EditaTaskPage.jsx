import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TasKFormComponent } from "../components/TaskFormComponent";
import { editTask, showTask } from "../store/thunks/taskThunk";
import { selectTaskById } from "../store/slices/taskSlice";

export const EditTaskPage = () => {
    const taskId = useParams().taskId;
    const task = useSelector(state => selectTaskById(state, taskId));
    const { loading, error } = useSelector(state => state.task);
    const [deletionPerformed, setDeletionPerformed] = useState(false);
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(editTask({ ...values }));
        window.location.href = '/tasks/allTasks';
    };

    useEffect(() => {
        if (firstExecution.current && !deletionPerformed) {
            dispatch(showTask(taskId))
                .then(() => {
                    setDeletionPerformed(true);
                });
            firstExecution.current = false;
        }
    }, [dispatch, deletionPerformed, taskId]);

    if (loading) {
        return(
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
            
        )
    }
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Editar tarea N# {taskId}</h1>
            <TasKFormComponent task={task} onSubmit={handleSubmit} btnValue='Editar' />
        </div>
    )
};