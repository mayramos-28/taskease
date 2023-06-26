import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";
import { fetchTasks } from "../store/thunks/taskThunk";
import { ListTaskComponent } from "./ListTaskComponent";

export const PendingTasksComponent = () => {
  const firstExecution = useRef(true);
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const [deletionPerformed, setDeletionPerformed] = useState(false);
  const { loading } = useSelector(state => state.task);

  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    if (firstExecution.current && !deletionPerformed) {
      dispatch(fetchTasks({ user_id: user_id, status: 'pending' }))
        .then(() => { setDeletionPerformed(true) });
      firstExecution.current = false;
    }

  }, [dispatch, user_id, deletionPerformed]);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>

    )
  }

  if (tasks.length === 0) return (
    <div className="py-5">
      No tienes tareas pendientes
    </div>
  )
  return (
    <div className="py-5">
      <h1 className="text-xl">Mis tareas pendientes</h1>
      <ListTaskComponent tasks={tasks} />
    </div>
  );
};