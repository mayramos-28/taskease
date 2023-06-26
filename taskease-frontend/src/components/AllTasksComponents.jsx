import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";

import { fetchTasks } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "./ListTaskComponent";


export const AllTaskComponente = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const [deletionPerformed, setDeletionPerformed] = useState(false);
    const { loading, error } = useSelector(state => state.task);

    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        if (firstExecution.current  && !deletionPerformed) {
            dispatch(fetchTasks({ user_id: user_id }))
            .then(() => {
                setDeletionPerformed(true);
                
            });
            firstExecution.current = false;
        }

    }, [dispatch, user_id,  deletionPerformed]);


    if (loading) {
        return(
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
            
        )
    }
    if (error) return <p>{error}</p>


    return (
        <>
            < ListTaskComponent tasks={tasks} />

        </>

    )
};