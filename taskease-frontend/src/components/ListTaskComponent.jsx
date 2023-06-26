
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getLimitDate } from "../helpers/dates";



export const ListTaskComponent = ({ tasks }) => {

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
                <div className="flex gap-10">
                  {/*  
                // Mejora pendiente: asignar usuarios a tareas y visualizar mas detalles de la tarea
                <Link as={NavLink} to={`/tasks/${task.id}`} activeClassName="text-blue-500 underline"
                    className="hover:text-blue-500 hover:underline">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" srokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>


                  </Link > */}
                  <Link as={NavLink} to={`/tasks/${task.id}/edit`} activeClassName="text-blue-500 underline"
                    className="hover:text-blue-500 hover:underline">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" srokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </Link >
                  <Link as={NavLink} to={`/tasks/${task.id}/delete`} activeClassName="text-blue-500 underline"
                    className="hover:text-blue-500 hover:underline">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                  </Link >
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end w-full">
              <p className="mt-1 text-md leading-5 text-red-400">
                Plazo: <time>{task.expiration_date}</time>
              </p>
              <p className="text-sm font-semibold leading-6 text-gray-500">
                { getLimitDate(task.expiration_date)}
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