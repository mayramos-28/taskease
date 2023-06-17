import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";
import { useEffect, useRef } from "react";
import { createTask } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "../components/ListTaskComponent";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const tasks = useSelector(selectAllTasks);
    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (firstExecution.current) {
            dispatch(createTask());
            firstExecution.current = false;
        }

    }, [dispatch, firstExecution]);
    
    const handleNewTask = () => {
     
        navigate("/new-task");
    };
    
    return (
        <>
            <div className="px-4 py-4 border border-red-400 text-center">
                <div className="md:col-span-2 flex justify-center items-center">
                    <h2 className="border border-green-400 text-center text-2xl">Tareas</h2>
                </div>
                <div className="px-4 py-4 flex justify-around">
                    <ListTaskComponent />
                    <div className="">
                        <button onClick={handleNewTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Nueva tarea</button>
                    </div>
                </div>
            </div>
        </>
    );
};