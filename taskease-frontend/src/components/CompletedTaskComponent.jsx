import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";
import { fetchTasks } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "./ListTaskComponent";
export const CompletedTasksComponent = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const { loading, error, success } = useSelector(state => state.task);
  
    const user_id = localStorage.getItem('user_id');
  
    useEffect(() => {
      if (firstExecution) {
        dispatch(fetchTasks ({ user_id: user_id, status: 'completed' }));
        firstExecution.current = false;
      }
  
    }, [dispatch, user_id]);
    if(loading) return <p>Cargando...</p>
    if(error) return <p>{error}</p>
    if(tasks.length === 0) return (
        <div className="py-5">
            No hay tareas completadas
        </div>
    )
    return (
        <>
      
        <ListTaskComponent tasks={tasks}/>
        </>
    );
};


