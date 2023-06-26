import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../store/slices/taskSlice";

import { fetchTasks } from "../store/thunks/taskThunk";


export const ListTaskComponent = ({tasks}) => {

  const checkSatus = (status) => {
    if (status === 'pending') {
      return 'bg-red-500 ';
    } else if (status === 'completed') {
      return 'bg-green-500 ';
    } else {
      return 'bg-blue-500';
    }
  };

  return (
    <>

       <ul role="list" className="divide-y ">

        {tasks.map((task) => (
          <li key={task.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex-col flex gap-x-4 w-full">
              <div className="min-w-0 text-left">
                <p className="text-sm font-semibold leading-6 text-gray-500 max-w-[300px] overflow-200-auto">
                  {task.title}
                </p>
                <p className="mt-1 text-md leading-5 text-gray-900 max-w-[500px] overflow-x-auto ">
                  {task.description}
                </p>
                <div className="flex  gap-2">
                  <a href="http://">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" srokeWidth="1.5" stroke="currentColor"className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                  </a>
                  <a href="http://">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" srokeWidth="1.5" stroke="currentColor"className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>

                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end w-full">
              <p className="mt-1 text-md leading-5 text-red-400">
                Plazo: <time>{task.expiration_date}</time>
              </p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className={`flex-none rounded-full bg-emerald-500/20 p-1`}>
                  <div className={`h-1.5 w-1.5 rounded-full ${checkSatus(task.status)}`} />
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  {task.status === 'pending' ? 'Pendiente' : task.status === 'completed' ? 'Completada' : 'En proceso'}
                  </p>

              </div>
            </div>
          </li>
        ))}
      </ul> 


    </>

  )
};