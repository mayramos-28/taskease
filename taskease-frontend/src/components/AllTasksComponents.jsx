import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";

import { fetchTasks } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "./ListTaskComponent";


export const AllTaskComponente = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const { loading, error, success } = useSelector(state => state.task);

    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        if (firstExecution) {
            dispatch(fetchTasks({ user_id: user_id }));
            firstExecution.current = false;
        }

    }, [dispatch, user_id]);


    console.log(tasks, 'tareas principal')
    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>


    return (
        <>
            < ListTaskComponent tasks={tasks} />

        </>

    )
};