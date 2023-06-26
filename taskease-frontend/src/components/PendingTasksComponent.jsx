import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";
import { fetchTasks } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "./ListTaskComponent";

export const PendingTasksComponent = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const { loading, error, success } = useSelector(state => state.task);
  
    const user_id = localStorage.getItem('user_id');
  
    useEffect(() => {
      if (firstExecution) {
        dispatch(fetchTasks ({ user_id: user_id, status: 'pending' }));
        firstExecution.current = false;
      }
  
    }, [dispatch, user_id]);

    if(tasks.length === 0) return (
        <div className="py-5">
            No tienes tareas pendientes
        </div>
    )
    return (
        <div className="py-5">
        <h1 className="text-xl">Mis tareas pendientes</h1>
        <ListTaskComponent tasks={tasks}/>
        </div>
    );
};